import { client, platformType } from "@/services";
import { EmailSendRequest, EmailSendResponse } from "@/types";

const VERIFICATION_BASE = "api/verification";

export const emailSend = async (params: EmailSendRequest): Promise<EmailSendResponse> => {
  const res = await client.post(`${VERIFICATION_BASE}/email/send?codeType=VERIFICATION_EMAIL`, params);
  console.log(res);
  return res.data;
}