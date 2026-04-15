import { useQuery } from "@tanstack/react-query";
import { getRecommandBooks } from "@/services/ai/recommandBooks";
import useUserStore from "@/store/useUserStore";

export const useRecommandBooks = () => {
  const username = useUserStore((state) => state.user?.username);
  
  return useQuery({
    queryKey: ["recommandBooks", username],
    queryFn: () => getRecommandBooks(username ?? ""),
  });
};