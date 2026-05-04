import { client, platformType } from "../api/client";
import type { BookSearchRequest, BookSearchResponse } from "@/types";

const BOOK_SEARCH_BASE = "search";

export const bookSearch = async ({ keyword, page = 0, size = 12 }: BookSearchRequest): Promise<BookSearchResponse> => {
  const encodedKeyword = encodeURIComponent(keyword.trim());
  const res = await client.get(
    `${BOOK_SEARCH_BASE}${platformType}&page=${page}&size=${size}&keyword=${encodedKeyword}`
  );
  console.log(res.data);
  return res.data;
};