import { useQuery } from "@tanstack/react-query";
import { getHomeBook } from "@/services";
import type { BookFindType, HomeBook } from "@/types";

export const useHomeBooks = (bookFindType: BookFindType) => {
  const query = useQuery({
    queryKey: ["homeBooks", bookFindType],
    queryFn: () => getHomeBook(bookFindType),
  });

  const books: HomeBook[] = query?.data?.data ?? [];

  return { ...query, books };
};
