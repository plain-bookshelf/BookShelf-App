import { client } from "../api/client";
import { EmailSendRequest, EmailResponse, EmailVerificationRequest } from "@/types";

const VERIFICATION_BASE = "api/verification";

export const emailSend = async (params: EmailSendRequest, codeType: string): Promise<EmailResponse> => {
  const res = await client.post(`${VERIFICATION_BASE}/email/send?codeType=${codeType}`, params);
  return res.data;
}

export const emailVerification = async (params: EmailVerificationRequest): Promise<EmailResponse> => {
  const res = await client.post(`${VERIFICATION_BASE}/email/verify`, params);
  return res.data;
}