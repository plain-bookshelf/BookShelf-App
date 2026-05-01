import { postChatbot } from "@/services/ai/chatbot";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "@/store/useUserStore";
import { ChatbotResponse } from "@/types";

export const useChatbot = () => {
  const username = useUserStore((state) => state.user?.username);
  const session_id = useUserStore((state) => state.user?.chat_session_id);

  return useMutation({
    mutationFn: async (question: string) => await postChatbot({ username: username ?? "", session_id: session_id ?? 0, question: question }),
    onSuccess: (data: ChatbotResponse) => {
      console.log("챗봇 응답 성공", data);
      return data.agent.answer;
    },
    onError: (error: Error) => {
      console.error("챗봇 응답 실패", error);
    },
  });
};