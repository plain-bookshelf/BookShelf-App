import { apiClient } from "./client";
import type { LoginRequest, LoginResponse } from "@/types/auth";
import { platformType } from "./client";

const AUTH_BASE = "api/auth";

/** 로그인 API */
export async function login(params: LoginRequest) {
  return apiClient.post(`${AUTH_BASE}/login${platformType}`, params)
}
