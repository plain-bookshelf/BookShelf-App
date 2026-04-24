import { SignupRequest, SignupResponse, SignupOfficialRequest, SignupOfficialResponse } from "@/types";
import { client, platformType } from "../api/client";

const MEMBER_BASE = "api/member";

export const signupMember = async (params: SignupRequest): Promise<SignupResponse> => {
  const res = await client.post(`${MEMBER_BASE}/signup-member${platformType}`, params);
  return res.data;
}

export const signupOfficial = async (params: SignupOfficialRequest): Promise<SignupOfficialResponse> => {
  const res = await client.post(`${MEMBER_BASE}/signup-official${platformType}`, params);
  console.log(res.data);
  return res.data;
}