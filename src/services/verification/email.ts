import { client } from "@/services";
import { EmailSendRequest, EmailResponse, EmailVerificationRequest } from "@/types";

const VERIFICATION_BASE = "api/verification";

export const emailSend = async (params: EmailSendRequest): Promise<EmailResponse> => {
  const res = await client.post(`${VERIFICATION_BASE}/email/send?codeType=VERIFICATION_EMAIL`, params);
  return res.data;
}

export const emailVerification = async (params: EmailVerificationRequest): Promise<EmailResponse> => {
  const res = await client.post(`${VERIFICATION_BASE}/email/verify`, params);
  return res.data;
}