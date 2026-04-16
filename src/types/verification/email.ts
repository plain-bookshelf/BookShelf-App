export interface EmailSendRequest {
  email: string;
}

export interface EmailSendResponse {
  status: string;
  message: string;
  data: string;
}