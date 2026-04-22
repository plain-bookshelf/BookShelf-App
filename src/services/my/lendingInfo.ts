import { LendingInfoResponse } from "@/types";
import { client } from "../api/client";

const MEMBER_BASE = "myPage";

export const getLendingInfo = async (): Promise<LendingInfoResponse> => {
  const res = await client.get(`${MEMBER_BASE}/lendingInfo`);
  console.log(res.data);
  return res.data;
};