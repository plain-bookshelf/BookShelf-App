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

export interface ChatbotRequest {
  username: string;
  session_id: number;
  question: string;
}

export interface ChatbotResponse {
  agent: {
    answer: string;
    cover_candidates: string[];
    intent: string;
    show_covers: boolean;
  };
  message_id: number;
}