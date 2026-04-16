import { SignupRequest, SignupResponse } from "@/types";
import { client, platformType } from "@/services";

const MEMBER_BASE = "api/member";

export const signupMember = async (params: SignupRequest): Promise<SignupResponse> => {
  const res = await client.post(`${MEMBER_BASE}/signup-member${platformType}`, params);
  return res.data;
}