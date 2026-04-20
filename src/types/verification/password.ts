export interface FindPasswordForm {
  email: string;
  verification_code: string;
  new_password: string;
}

export interface FindPasswordRequest {
  email: string;
  verification_code: string;
}

export interface PasswordResetRequest {
  email: string;
  new_password: string;
}

export interface PasswordResponse {
  status: string;
  message: string;
  data: boolean;
}