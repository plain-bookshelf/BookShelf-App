import type { ChatSessionRequest, ChatSessionResponse } from "@/types";
import { postChatSession } from "@/services";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "@/store/useUserStore";

export const useChatSession = () => {
  const username = useUserStore((state) => state.user?.username);
  
  return useMutation({
    mutationFn: async() => await postChatSession({ username: username ?? "" }),

      onSuccess: async (data: ChatSessionResponse) => {
        const { id } = data;

        await useUserStore.getState().updateUser({ chat_session_id: id });
      },

      onError: (error) => {
        console.error("챗세션 생성 실패", error);
      },
  });
};