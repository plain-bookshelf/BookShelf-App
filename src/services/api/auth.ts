import { client, platformType } from "./client";
import type { LoginRequest } from "@/types/auth";
import { refreshTokenStorage } from "@/storage/refreshTokenStorage";
import { getDeviceToken } from "@/services/device/deviceToken";

const AUTH_BASE = "api/auth";

const getDeviceTokenHeader = async () => ({
  "X-Device-Token": await getDeviceToken(),
});

/* 로그인 API */
export const login = async (params: LoginRequest) => {
  const res = await client.post(
    `${AUTH_BASE}/login${platformType}`,
    params,
    {
      headers: await getDeviceTokenHeader(),
    }
  )
  return res.data;
}

/* 토큰 갱신 API */
export const reissue = async () => {
  const refreshToken = await refreshTokenStorage.get();
  if (!refreshToken) return;
  const res = await client.put(
    `${AUTH_BASE}/reissue${platformType}`,
    {},
    {
      headers: {
        ...(await getDeviceTokenHeader()),
        "x-refresh-token": refreshToken,
        "x-no-retry": "true",
      },
    }
  )
  return res.data;
}

/*로그아웃 */
export const logout = async () => {
  const refreshToken = await refreshTokenStorage.get();

  if (!refreshToken) return;

  const res = await client.post(
    `${AUTH_BASE}/logout${platformType}`,
    {},
    {
      headers: {
        ...(await getDeviceTokenHeader()),
        "x-refresh-token": refreshToken,
      },
    }
  )
  return res.data;
}