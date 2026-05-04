import { useQuery } from "@tanstack/react-query";
import { getComment } from "@/services/bookDetail";

export const useComment = (bookId: number) => {
  const query = useQuery({
    queryKey: ["comment", bookId],
    queryFn: () => getComment(bookId),
  });

  const commentData = query?.data?.data;

  return { ...query, commentData };
};