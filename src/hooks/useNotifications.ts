import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createNotificationEventSource, getNotifications } from "@/services";
import useAuthStore from "@/store/useAuthStore";
import type {
  NotificationItem,
  NotificationResponse,
  NotificationStreamResponse,
} from "@/types";

export const useNotifications = (page = 0, size = 20) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const lastEventIdRef = useRef<string | null>(null);
  const queryKey = ["notifications", page, size];

  const query = useQuery({
    queryKey,
    queryFn: () => getNotifications({ page, size }),
  });

  useEffect(() => {
    if (!accessToken) {
      setIsConnected(false);
      return;
    }

    const eventSource = createNotificationEventSource(
      accessToken,
      lastEventIdRef.current,
    );

    const saveLastEventId = (lastEventId: string | null) => {
      if (lastEventId) {
        lastEventIdRef.current = lastEventId;
      }
    };

    const handleOpen = () => {
      setIsConnected(true);
      setErrorMessage(null);
    };

    const handleConnect = (event: { lastEventId: string | null }) => {
      saveLastEventId(event.lastEventId);
      setIsConnected(true);
      setErrorMessage(null);
    };

    const handleNotification = (event: {
      data: string | null;
      lastEventId: string | null;
    }) => {
      saveLastEventId(event.lastEventId);

      if (!event.data) {
        return;
      }

      try {
        const data = JSON.parse(event.data) as NotificationStreamResponse;

        queryClient.setQueryData<NotificationResponse>(queryKey, (prevData) => {
          if (!prevData) {
            return prevData;
          }

          const nextContent = [
            data.notification,
            ...prevData.data.content.filter((notification) => (
              notification.id !== data.notification.id
            )),
          ];

          return {
            ...prevData,
            data: {
              ...prevData.data,
              content: nextContent,
            },
          };
        });

        setErrorMessage(null);
      } catch (error) {
        console.error("알림 SSE 응답 파싱 실패", error);
        setErrorMessage("알림 정보를 불러오지 못했습니다.");
      }
    };

    const handleError = (event: unknown) => {
      console.error("알림 SSE 연결 실패", event);
      setIsConnected(false);
      setErrorMessage("알림 연결에 실패했습니다.");
    };

    const handleClose = () => {
      setIsConnected(false);
    };

    eventSource.addEventListener("open", handleOpen);
    eventSource.addEventListener("sse-connect", handleConnect);
    eventSource.addEventListener("notification", handleNotification);
    eventSource.addEventListener("error", handleError);
    eventSource.addEventListener("close", handleClose);

    return () => {
      eventSource.removeAllEventListeners();
      eventSource.close();
    };
  }, [accessToken, page, queryClient, size]);

  const notifications: NotificationItem[] = query?.data?.data?.content ?? [];
  const isLastPage = query?.data?.data?.is_last_page ?? true;

  return { ...query, notifications, isLastPage, isConnected, errorMessage };
};
