import EventSource from "react-native-sse";
import { API_BASE_URL } from "@env";
import { client } from "../api/client";
import type { NotificationRequest, NotificationResponse } from "@/types";

type NotificationStreamEvent =
  | "sse-connect"
  | "notification";

const NOTIFICATION_BASE = "api/notification";

const getStreamUrl = () => {
  const baseUrl = API_BASE_URL.replace(/\/$/, "");

  return `${baseUrl}/${NOTIFICATION_BASE}/subscribe`;
};

export const createNotificationEventSource = (
  accessToken: string,
  lastEventId?: string | null,
) => {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${accessToken}`,
    "Last-Event-ID": lastEventId ?? "",
  };

  return new EventSource<NotificationStreamEvent>(getStreamUrl(), {
    headers,
    method: "GET",
  });
};

export const getNotifications = async ({
  page = 0,
  size = 99,
}: NotificationRequest = {}): Promise<NotificationResponse> => {
  const res = await client.get(`${NOTIFICATION_BASE}?page=${page}&size=${size}`);
  console.log(res.data);
  return res.data;
};
