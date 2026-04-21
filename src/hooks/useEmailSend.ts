import type { EmailSendRequest, EmailResponse } from "@/types";
import { emailSend } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useEmailSend = () => {
  return useMutation({
    mutationFn: async({params, codeType}: {params: EmailSendRequest, codeType: string}): Promise<EmailResponse> => {
      return await emailSend(params, codeType);
    },

      onSuccess: (data: EmailResponse) => {
        console.log("이메일 전송 성공", data);
      },

      onError: (error) => {
        console.error("이메일 전송 실패", error);
      },
  });
};