import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/api/auth";
import useAuthStore from "@/store/useAuthStore";
import type { LoginRequest } from "@/types/auth";
import type { LoginResponse } from "@/types/auth/login";

export const useLogin = () => {
  return useMutation({
    mutationFn: async(params: LoginRequest) => await login(params),

    onSuccess: async (data: LoginResponse) => {
      const { access_token, refresh_token } = data.data;
      console.log(data.data);

      await useAuthStore.getState().setTokens(access_token, refresh_token);
    },

    onError: (error) => {
      console.error("로그인 실패", error);
    },
  });
};