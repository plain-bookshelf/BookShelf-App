/** 로그인 요청 타입 */
export interface LoginRequest {
  username: string;
  password: string;
}

/** 로그인 성공 응답 타입 TODO: 추후 변경해야 됨 */
export interface LoginResponse {
  data: {
    access_token: string;
    refresh_token: string;
    username?: string;
    nickname?: string;
    authority?: string;
    affiliation_name?: string;
    profile_image?: string;
  };
}
