import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "@/services";
import type { NotificationItem } from "@/types";

export const useNotifications = (page = 0, size = 20) => {
  const query = useQuery({
    queryKey: ["notifications", page, size],
    queryFn: () => getNotifications({ page, size }),
  });

  const notifications: NotificationItem[] = query?.data?.data?.content ?? [];
  const isLastPage = query?.data?.data?.is_last_page ?? true;

  return { ...query, notifications, isLastPage };
};
