import { AI_BASE_URL } from "@env";
import { aiClient } from "./client";
import type { ChatSessionRequest } from "@/types";

const CHAT_PATH = "chat";

export const postChatSession = async (params: ChatSessionRequest) => {
  const res = await aiClient.post(`${AI_BASE_URL}${CHAT_PATH}/session/test007@bookmaru.com`);
  return res.data;
};