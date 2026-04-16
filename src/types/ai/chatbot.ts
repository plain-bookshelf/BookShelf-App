export interface ChatCardProps {
  text: string;
  who: "user" | "ai";
}

export interface ChatSessionRequest {
  username: string;
}

export interface ChatSessionResponse {
  id: number;
  member_id: number;
  title: string;
  created_at: string;
  updated_at: string;
}