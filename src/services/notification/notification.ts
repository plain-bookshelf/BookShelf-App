import { client } from "../api/client";
import type { NotificationRequest, NotificationResponse } from "@/types";

const NOTIFICATION_BASE = "api/notification";

export const getNotifications = async ({
  page = 0,
  size = 99,
}: NotificationRequest = {}): Promise<NotificationResponse> => {
  const res = await client.get(`${NOTIFICATION_BASE}?page=${page}&size=${size}`);
  console.log(res.data);
  return res.data;
};
