import { BookLikeResponse } from "@/types/bookLike/bookLike";
import { client } from "../api/client";
import useAuthStore from "@/store/useAuthStore";

const BOOK_LIKE_BASE = "api/bookDetail";

export const like = async (bookId: number): Promise<BookLikeResponse> => {
  const res = await client.post(`${BOOK_LIKE_BASE}/${bookId}/like`);
  console.log(res.data);
  return res.data;
};

export const unlike = async (bookId: number): Promise<BookLikeResponse> => {
  const res = await client.delete(`${BOOK_LIKE_BASE}/${bookId}/like`);
  console.log(res.data);
  return res.data;
};