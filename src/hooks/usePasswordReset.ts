import { useMutation } from "@tanstack/react-query";
import { PasswordResetRequest, PasswordResponse } from "@/types";
import { passwordReset } from "@/services";

export const usePasswordReset = () => {
  return useMutation({
    mutationFn: async(params: PasswordResetRequest): Promise<PasswordResponse> => {
      return await passwordReset(params);
    },

      onSuccess: (data: PasswordResponse) => {
        console.log("비밀번호 재설정 성공", data);
      },

      onError: (error) => {
        console.error("비밀번호 재설정 실패", error);
      },
  });
};