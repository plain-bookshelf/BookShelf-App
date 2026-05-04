import { useMutation, useQueryClient } from "@tanstack/react-query";
import { like, unlike } from "@/services/commentLike";

export const useCommentLike = () => {
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["comment"] });
  };

  const CommentLikeMutation = useMutation({
    mutationFn: async (commentId: number) => await like(commentId),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("댓글 좋아요 실패", error);
    },
  });

  const CommentUnlikeMutation = useMutation({
    mutationFn: async (commentId: number) => await unlike(commentId),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("댓글 좋아요 취소 실패", error);
    },
  });

  return { CommentLikeMutation, CommentUnlikeMutation };
};
