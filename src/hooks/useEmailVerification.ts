import type { EmailResponse, EmailVerificationRequest } from "@/types";
import { emailVerification } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useEmailVerification = () => {
  return useMutation({
    mutationFn: async(params: EmailVerificationRequest): Promise<EmailResponse> => {
      return await emailVerification(params);
    },

      onSuccess: (data: EmailResponse) => {
        console.log("이메일 인증 성공", data);
      },

      onError: (error) => {
        console.error("이메일 인증 실패", error);
      },
  });
};