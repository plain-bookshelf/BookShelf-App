/** 로그인 유저 프로필 (백엔드 스펙에 맞게 필드 추가) */
export interface User {
  username: string;
  nickname: string;
  access_token: string;
  authority: string;
  affiliation_name: string;
  profile_image: string;
  chat_session_id?: number;
}