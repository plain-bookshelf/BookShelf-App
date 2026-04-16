import { aiClient } from "./client";
import { AI_BASE_URL } from "@env";
import type { RecommandBooksResponse } from "@/types";

export const getRecommandBooks = async (username: string): Promise<RecommandBooksResponse> => {
  const res = await aiClient.get(`${AI_BASE_URL}recommend_books/test007@bookmaru.com`);
  return res.data;
};