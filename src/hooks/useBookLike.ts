import { useMutation, useQueryClient } from "@tanstack/react-query";
import { like, unlike } from "@/services";

export const useBookLike = () => {
  const queryClient = useQueryClient();

  const handleSuccess = (_data: unknown, bookId: number) => {
    queryClient.invalidateQueries({ queryKey: ["bookDetail", bookId] });
  };

  const BookLikeMutation = useMutation({
    mutationFn: async (bookId: number) => await like(bookId),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("도서 좋아요 실패", error);
    },
  });

  const BookUnlikeMutation = useMutation({
    mutationFn: async (bookId: number) => await unlike(bookId),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("도서 좋아요 취소 실패", error);
    },
  });

  return { BookLikeMutation, BookUnlikeMutation };
};
