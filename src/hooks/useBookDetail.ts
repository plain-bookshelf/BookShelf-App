import { getBookDetail } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useBookDetail = (bookId: number) => {
  const query = useQuery({
    queryKey: ["bookDetail", bookId],
    queryFn: () => getBookDetail(bookId),
  });

  const bookDetail = query?.data?.data?.BookDetailPageResult;

  return { ...query, bookDetail };
};