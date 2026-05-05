import { useQuery } from "@tanstack/react-query";
import { getRanking } from "@/services/ranking/ranking";

export const useRanking = () => {
  const query = useQuery({
    queryKey: ["ranking"],
    queryFn: getRanking,
  });

  const ranking = query?.data?.data;

  return { ...query, ranking };
};