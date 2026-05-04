import { client } from "../api/client";
import { CommentWriteResponse } from "@/types/comment";

const COMMENT_WRITE_BASE = "api/comment";

export const commentWrite = async (bookId: number, comment: string): Promise<CommentWriteResponse> => {
  const res = await client.post(`${COMMENT_WRITE_BASE}/${bookId}/write`, { comment: comment });
  console.log(res.data);
  return res.data;
};