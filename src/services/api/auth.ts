import axios from "axios";
import { API_BASE_URL } from "@env";
import { apiClient, api, platformType } from "./client";
import type { LoginRequest } from "@/types/auth";
import useAuthStore from "@/store/useAuthStore";
import { refreshTokenStorage } from "@/storage/refreshTokenStorage";

const AUTH_BASE = "api/auth";

/* 로그인 API */
export async function login(params: LoginRequest) {
  return apiClient.post(`${AUTH_BASE}/login${platformType}`, params)
}

/* 토큰 갱신 API */
export async function refreshAccessToken() {
  const refreshToken = await refreshTokenStorage.get();

  if (!refreshToken) {
    await useAuthStore.getState().clearTokens();
    return null;
  }

  try {
    const res = await axios.put(
      `${API_BASE_URL}/${AUTH_BASE}/reissue${platformType}`,
      null,
      {
        timeout: 3000,
        headers: { "X-Refresh-Token": refreshToken },
      }
    );

    const newAccessToken = res.data.data.access_token;
    await useAuthStore.getState().setAccessToken(newAccessToken);
  } catch {
    await useAuthStore.getState().clearTokens();
  }
}

/*로그아웃 */
export async function logout() {
  const refreshToken = await refreshTokenStorage.get();

  if (!refreshToken) return;

  return axios.post(`${API_BASE_URL}/${AUTH_BASE}/logout${platformType}`, null, {
    timeout: 3000,
    headers: { Authorization: refreshToken },
  })
}