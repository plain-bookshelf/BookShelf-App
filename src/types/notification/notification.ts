export interface NotificationRequest {
  page?: number;
  size?: number;
}

export interface NotificationTargetInfo {
  target_id: number;
  target_type: string;
}

export interface NotificationPayload {
  type: string;
  book_id?: number;
  title?: string;
  return_date?: string;
}

export interface NotificationInfo {
  name: string;
  payload: NotificationPayload;
  type: string;
  url: string;
}

export interface NotificationItem {
  id: number;
  member_id: number;
  target_info: NotificationTargetInfo;
  notification_info: NotificationInfo;
  is_read: boolean;
}

export interface NotificationResponse {
  status: string;
  message: string;
  data: {
    content: NotificationItem[];
    is_last_page: boolean;
  };
}

export interface NotificationConnectResponse {
  status: string;
  connected_at: string;
}

export interface NotificationStreamResponse {
  notification: NotificationItem;
}
