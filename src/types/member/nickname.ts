export interface ValidNicknameRequest {
  nickname: string;
}

export interface ValidNicknameResponse {
  status: string;
  message: string;
  data: string;
}

export interface NicknameChangeRequest {
  new_nickname: string;
}

export interface NicknameChangeResponse {
  status: string;
  message: string;
  data: string;
}