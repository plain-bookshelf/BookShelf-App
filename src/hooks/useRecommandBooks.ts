import { useQuery } from "@tanstack/react-query";
import { getRecommandBooks } from "@/services/ai/recommandBooks";

export const useRecommandBooks = () => {
  return useQuery({
    queryKey: ["recommandBooks"],
    queryFn: getRecommandBooks,
  });
};