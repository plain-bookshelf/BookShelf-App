import { useMutation } from "@tanstack/react-query";
import { profileChange } from "@/services";
import useUserStore from "@/store/useUserStore";

export const useProfileChange = () => {
  const updateUser = useUserStore((state) => state.updateUser);

  return useMutation({
    mutationFn: async (newProfileImageUrl: string) =>
      await profileChange(newProfileImageUrl),

    onSuccess: (_data, newProfileImageUrl) => {
      updateUser({ profile_image: newProfileImageUrl });
    },

    onError: (error) => {
      console.error("프로필 이미지 수정 실패", error);
    },
  });
};
