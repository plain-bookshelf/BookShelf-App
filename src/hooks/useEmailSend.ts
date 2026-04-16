import type { EmailSendRequest, EmailSendResponse } from "@/types";
import { emailSend } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useEmailSend = () => {
  return useMutation({
    mutationFn: async(params: EmailSendRequest): Promise<EmailSendResponse> => {
      return await emailSend(params);
    },

      onSuccess: async (data: EmailSendResponse) => {
        console.log(data.data);
      },

      onError: (error) => {
        console.error("이메일 전송 실패", error);
      },
  });
};