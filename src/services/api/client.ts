import axios from "axios";
import { API_BASE_URL } from "@env";
import useAuthStore from "../../store/useAuthStore";
import { refreshTokenStorage } from "../../storage/refreshTokenStorage";

/* api 인스턴스 */
const api = axios.create({
  baseURL: 'http://10.89.79.143:8080',
  timeout: 15000,
});

export const platformType = '?platformType=ANDROID'

/* 토큰 갱신 */
async function refreshAccessToken() {
  const refreshToken = await refreshTokenStorage.get();

  if (!refreshToken) return null;

  const res = await axios.post(`${API_BASE_URL}/reissue`, {
    refreshToken,
  });

  const newAccessToken = res.data.accessToken;

  useAuthStore.getState().setAccessToken(newAccessToken);

  return newAccessToken;
}


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