import { useMutation, useQueryClient } from "@tanstack/react-query";
import { profileChange, ProfileImageUrl } from "@/services";
import type { ProfileImageUrlRequest } from "@/types";

export const useProfileChange = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: ProfileImageUrlRequest) => {
      const profileImageUrl = await ProfileImageUrl(params);
      return await profileChange(profileImageUrl.data.image_key);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my"] });
    },

    onError: (error) => {
      console.error("프로필 이미지 수정 실패", error);
    },
  });
};
