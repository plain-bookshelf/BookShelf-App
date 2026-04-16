import { useMutation } from "@tanstack/react-query";
import { SignupRequest, SignupResponse } from "@/types";
import { signupMember } from "@/services";

export const useSignup = () => {
  return useMutation({
    mutationFn: async(params: SignupRequest) => await signupMember(params),

    onSuccess: async (data: SignupResponse) => {
      console.log(data.data);
    },

    onError: (error) => {
      console.error("회원가입 실패", error);
    },
  });
};