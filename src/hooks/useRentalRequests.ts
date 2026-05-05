import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { approveRentalRequest, createRentalRequestEventSource } from "@/services";
import useAuthStore from "@/store/useAuthStore";
import type { RentalRequestItem, RentalRequestSnapshot } from "@/types";

export const useRentalRequests = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [requests, setRequests] = useState<RentalRequestItem[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const lastEventIdRef = useRef<string | null>(null);

  const RentalRequestApprovalMutation = useMutation({
    mutationFn: async (bookDetailId: number) => await approveRentalRequest(bookDetailId),
    onSuccess: (_data, bookDetailId) => {
      setRequests((prevRequests) => (
        prevRequests.filter((request) => request.book_detail_id !== bookDetailId)
      ));
    },
    onError: (error) => {
      console.error("대여 요청 승인 실패", error);
    },
  });

  useEffect(() => {
    if (!accessToken) {
      setIsConnected(false);
      setRequests([]);
      return;
    }

    const eventSource = createRentalRequestEventSource(
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

    const handleSnapshot = (event: {
      data: string | null;
      lastEventId: string | null;
    }) => {
      saveLastEventId(event.lastEventId);

      if (!event.data) {
        setRequests([]);
        return;
      }

      try {
        const snapshot = JSON.parse(event.data) as RentalRequestSnapshot;
        setRequests(snapshot.requests ?? []);
        setErrorMessage(null);
      } catch (error) {
        console.error("책 요청 SSE 응답 파싱 실패", error);
        setErrorMessage("책 요청 정보를 불러오지 못했습니다.");
      }
    };

    const handleError = (event: unknown) => {
      console.error("책 요청 SSE 연결 실패", event);
      setIsConnected(false);
      setErrorMessage("책 요청 연결에 실패했습니다.");
    };

    const handleClose = () => {
      setIsConnected(false);
    };

    eventSource.addEventListener("open", handleOpen);
    eventSource.addEventListener("sse-connect", handleConnect);
    eventSource.addEventListener("rental-request-snapshot", handleSnapshot);
    eventSource.addEventListener("error", handleError);
    eventSource.addEventListener("close", handleClose);

    return () => {
      eventSource.removeAllEventListeners();
      eventSource.close();
    };
  }, [accessToken]);

  return {
    requests,
    isConnected,
    errorMessage,
    RentalRequestApprovalMutation,
  };
};
