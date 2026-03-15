import axios from "axios";
import { API_BASE_URL } from "@env";
import useAuthStore from "../../store/useAuthStore";
import { refreshAccessToken } from "./auth";

/* api 인스턴스 (헤더 등 커스텀 옵션이 필요할 때 사용) */
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
});

/* 플랫폼 타입 */
export const platformType = '?platformType=ANDROID'

/* api 인터셉터 */
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const newToken = await refreshAccessToken();

      if (newToken) {
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return api.request(error.config);
      }

      /* 리프레시 실패 시 토큰 정리 → 앱에서 accessToken 없음으로 로그인 풀림 */
      await useAuthStore.getState().clearTokens();
    }

    return Promise.reject(error);
  }
);

/* api 요청 보낼 때 실제로 사용하는 함수 */
export const apiClient = {
  get: (url: string) => api.get(url).then((res) => res.data.data),

  post: (url: string, body?: any) =>
    api.post(url, body).then((res) => res.data.data),

  put: (url: string, body?: any) =>
    api.put(url, body).then((res) => res.data.data),

  delete: (url: string) =>
    api.delete(url).then((res) => res.data.data),
};