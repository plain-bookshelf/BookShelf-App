import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/api/auth";
import { postChatSession } from "@/services/ai/chatbot";
import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/useUserStore";
import type { LoginRequest } from "@/types/auth";
import type { LoginResponse } from "@/types/auth/login";

export const useLogin = () => {
  return useMutation({
    mutationFn: async(params: LoginRequest) => await login(params),

    onSuccess: async (data: LoginResponse, variables: LoginRequest) => {
      const { access_token, refresh_token, username, nickname, authority, affiliation_name, profile_image } = data.data;
      console.log(data.data);

      useUserStore.getState().setUser({
        username: username ?? variables.username,
        nickname,
        authority,
        affiliation_name,
        profile_image,
      });
      await useAuthStore.getState().setTokens(access_token, refresh_token);

      try {
        const chatSession = await postChatSession({ username: variables.username });
        useUserStore.getState().updateUser({ chat_session_id: chatSession.id });
      } catch (error) {
        console.error("챗세션 생성 실패", error);
      }
    },

    onError: (error) => {
      console.error("로그인 실패", error);
    },
  });
};