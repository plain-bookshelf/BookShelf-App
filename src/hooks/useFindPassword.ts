import type { FindPasswordRequest, PasswordResponse } from "@/types";
import { findPassword } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useFindPassword = () => {
  return useMutation({
    mutationFn: async(params: FindPasswordRequest): Promise<PasswordResponse> => {
      return await findPassword(params);
    },

      onSuccess: (data: PasswordResponse) => {
        console.log("이메일 인증 성공", data);
      },

      onError: (error) => {
        console.error("이메일 인증 실패", error);
      },
  });
};