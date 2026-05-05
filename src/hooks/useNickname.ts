import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nickNameChange, validNickname } from "@/services";
import useUserStore from "@/store/useUserStore";

export const useNickname = () => {
  const queryClient = useQueryClient();
  const updateUser = useUserStore((state) => state.updateUser);

  const ValidNicknameMutation = useMutation({
    mutationFn: async (nickname: string) => await validNickname(nickname),
    onError: (error) => {
      console.error("닉네임 중복 확인 실패", error);
    },
  });

  const NicknameChangeMutation = useMutation({
    mutationFn: async (newNickname: string) => await nickNameChange(newNickname),
    onSuccess: (_data, newNickname) => {
      updateUser({ nickname: newNickname });
      queryClient.invalidateQueries({ queryKey: ["my"] });
    },
    onError: (error) => {
      console.error("닉네임 수정 실패", error);
    },
  });

  return { ValidNicknameMutation, NicknameChangeMutation };
};
