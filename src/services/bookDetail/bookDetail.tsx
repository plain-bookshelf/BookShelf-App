import { client } from "../api/client";
import { BookDetailResponse } from "@/types";

const BOOK_DETAIL_BASE = "book";

export const getBookDetail = async (bookId: number): Promise<BookDetailResponse> => {
  const res = await client.get(`${BOOK_DETAIL_BASE}/${bookId}`);
  console.log(res.data);
  return res.data;
};