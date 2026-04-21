import { client } from "../api/client";
import { FindPasswordRequest, PasswordResponse, PasswordResetRequest } from "@/types";

const VERIFICATION_BASE = "api/verification";

export const findPassword = async (params: FindPasswordRequest): Promise<PasswordResponse> => {
  console.log("findPassword", params);
  const res = await client.post(`${VERIFICATION_BASE}/find-password`, params);
  return res.data;
}

export const passwordReset = async (params: PasswordResetRequest): Promise<PasswordResponse> => {
  console.log("passwordReset", params);
  const res = await client.patch(`${VERIFICATION_BASE}/password-reset`, params);
  return res.data;
}