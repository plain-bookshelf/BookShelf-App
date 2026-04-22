import { client } from "../api/client";
import type { MyResponse } from "@/types";

const MEMBER_BASE = "myPage";

export const getMy = async (): Promise<MyResponse> => {
  const res = await client.get(`${MEMBER_BASE}`);
  console.log(res.data);
  return res.data;
};
