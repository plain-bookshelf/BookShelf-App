import useUserStore from "@/store/useUserStore";
import { aiClient } from "./client";
import { AI_BASE_URL } from "@env";

export const getRecommandBooks = async (member_id: string) => {
  const res = await aiClient.get(`${AI_BASE_URL}recommend_books/test007@bookmaru.com`);
  return res.data;
};