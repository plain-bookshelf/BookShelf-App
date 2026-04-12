import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import useAuthStore from "@/store/useAuthStore";
import { API_BASE_URL } from "@env";
import { reissue } from "./auth";

export const platformType = '?platformType=ANDROID';

export const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

client.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

client.interceptors.response.use(
  (response) => response,

  async (error) => {
    /* axios 에러가 아니거나 요청 설정이 없으면 에러 반환 */
    if (!axios.isAxiosError(error) || !error.config) {
      return Promise.reject(error);
    }
    const originalRequest = error.config as CustomAxiosRequestConfig;

    /* 요청 설정에 x-no-retry 헤더가 있으면 에러 반환 */
    if (originalRequest.headers?.["x-no-retry"]) {
      return Promise.reject(error);
    }
    
    const currentAccessToken = useAuthStore.getState().accessToken;
    /* 401 에러 && 재시도 안 한 요청 */
    if (error.response?.status === 401 && !originalRequest._retry && !!currentAccessToken) {
      originalRequest._retry = true;

      try {
        const data = await reissue();
        if (!data?.accessToken) throw new Error("토큰 재발급 실패");

        useAuthStore.getState().setAccessToken(data.accessToken);

        originalRequest.headers?.set("Authorization", `Bearer ${data.accessToken}`);

        return await client(originalRequest);

      } catch (refreshError) {
        await useAuthStore.getState().clearTokens();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);