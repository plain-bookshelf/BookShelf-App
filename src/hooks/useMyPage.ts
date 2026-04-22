import { useQuery } from "@tanstack/react-query";
import { getMy } from "@/services";

export const useMyPage = () => {
  const query = useQuery({
    queryKey: ["my"],
    queryFn: getMy,
  });

  const my = query?.data?.data;
  console.log(my);

  return { ...query, my };
};
