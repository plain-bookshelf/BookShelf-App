import { CommentLikeResponse } from "@/types/commentLike";
import { client } from "../api/client";

const COMMENT_LIKE_BASE = "api/comment";

export const like = async (commentId: number): Promise<CommentLikeResponse> => {
  const res = await client.post(`${COMMENT_LIKE_BASE}/${commentId}/like`);
  console.log(res.data);
  return res.data;
};

export const unlike = async (commentId: number): Promise<CommentLikeResponse> => {
  const res = await client.delete(`${COMMENT_LIKE_BASE}/${commentId}/unlike`);
  console.log(res.data);
  return res.data;
};