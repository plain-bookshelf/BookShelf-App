import { client } from "../api";
import { RankingResponse } from "@/types/ranking/ranking";

const MEMBER_BASE = "ranking";

export const getRanking = async (): Promise<RankingResponse> => {
  const res = await client.get(`${MEMBER_BASE}`);
  console.log(res.data);
  return res.data;
};