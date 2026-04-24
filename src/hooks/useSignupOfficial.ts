import { useMutation } from "@tanstack/react-query";
import { SignupOfficialRequest, SignupOfficialResponse } from "@/types";
import { signupOfficial } from "@/services";

export const useSignupOfficial = () => {
  return useMutation({
    mutationFn: async (params: SignupOfficialRequest) => await signupOfficial(params),

    onSuccess: async (data: SignupOfficialResponse) => {
      console.log(data.data);
    },

    onError: (error) => {
      console.error("관계자 회원가입 실패", error);
    },
  });
};
