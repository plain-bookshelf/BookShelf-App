export interface NotificationRequest {
  page?: number;
  size?: number;
}

export interface NotificationItem {
  id: number;
  member_id: number;
  target_info: {
    target_id: number;
    target_type: string;
  };
  notification_info: {
    name: string;
    payload: {
      type: string;
      book_id?: number;
      title?: string;
      return_date?: string;
    };
    type: string;
    url: string;
  };
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
