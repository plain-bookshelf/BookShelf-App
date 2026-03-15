import { useState, useCallback } from "react";
import { login as loginApi } from "@/services/api/auth";
import useAuthStore from "@/store/useAuthStore";
import type { LoginRequest } from "@/types/auth";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setTokens = useAuthStore((s) => s.setTokens);

  const login = useCallback(async (params: LoginRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await loginApi(params);
      await setTokens(res.access_token, res.refresh_token);
    } catch (e: any) {
      setError(e?.response?.data?.message ?? "로그인에 실패했습니다.");
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [setTokens]);

  return {
    login,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}