import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentWrite } from "@/services/comment";
import { CommentWrite } from "@/types/comment";

interface CommentWriteVariables extends CommentWrite {
  bookId: number;
}

export const useCommentWrite = () => {
  const queryClient = useQueryClient();

  const handleSuccess = (_data: unknown, { bookId }: CommentWriteVariables) => {
    queryClient.invalidateQueries({ queryKey: ["comment", bookId] });
  };

  const CommentWriteMutation = useMutation({
    mutationFn: async ({ bookId, comment }: CommentWriteVariables) => await commentWrite(bookId, comment),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("댓글 작성 실패", error);
    },
  });

  return { CommentWriteMutation };
};
