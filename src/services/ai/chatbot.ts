import { AI_BASE_URL } from "@env";
import { aiClient } from "./client";
import type { ChatbotRequest, ChatbotResponse, ChatSessionRequest, ChatSessionResponse } from "@/types";

const CHAT_PATH = "chat";

export const postChatSession = async (params: ChatSessionRequest) => {
  const res = await aiClient.post<ChatSessionResponse>(`${AI_BASE_URL}${CHAT_PATH}/session/${encodeURIComponent(params.username)}`);
  console.log(res.data);
  return res.data;
};

export const postChatbot = async (params: ChatbotRequest) => {
  const res = await aiClient.post<ChatbotResponse>(`${AI_BASE_URL}${CHAT_PATH}`, params);
  console.log(res.data);
  return res.data;
};