import { client } from "../api/client";
import { CommentResponse } from "@/types";

const COMMENT_BASE = "book";

export const getComment = async (bookId: number): Promise<CommentResponse> => {
  const res = await client.get(`${COMMENT_BASE}/${bookId}/comment`);
  console.log(res.data);
  return res.data;
};