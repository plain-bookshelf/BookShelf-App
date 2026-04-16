export interface EmailSendRequest {
  email: string;
}

export interface EmailVerificationRequest extends EmailSendRequest {
  verification_code: string;
}

export interface EmailResponse {
  status: string;
  message: string;
  data: string;
}