import { useQuery } from "@tanstack/react-query";
import { getHomeBooks } from "@/services";
import type { BookFindType, HomeBook } from "@/types";

export const useHomeBooks = (bookFindType: BookFindType) => {
  const query = useQuery({
    queryKey: ["homeBooks", bookFindType],
    queryFn: () => getHomeBooks(bookFindType),
  });

  const books: HomeBook[] = query?.data?.data?.SliceResult?.content ?? [];

  return { ...query, books };
};
