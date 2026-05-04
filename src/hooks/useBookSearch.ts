import { useQuery } from "@tanstack/react-query";
import { bookSearch } from "@/services";
import type { BookSearch } from "@/types";

export const useBookSearch = (keyword: string, page = 0, size = 12) => {
  const normalizedKeyword = keyword.trim();
  console.log(normalizedKeyword);

  const query = useQuery({
    queryKey: ["bookSearch", normalizedKeyword, page, size],
    queryFn: () => bookSearch({ keyword: normalizedKeyword, page, size }),
    enabled: normalizedKeyword.length > 0,
  });

  const books: BookSearch[] = query?.data?.data?.content ?? [];
  console.log(books);
  return { ...query, books };
};
