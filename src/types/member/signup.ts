export interface SignupRequest {
  username: string;
  password: string;
  email: string;
  affiliation_name: string;
}

export interface SignupResponse {
  data: {
    username: string;
    nickname: string;
    access_token: string;
    authority: string;
    platform_type: string;
    affiliation_name: string;
    profile_image: string;
    oauth_provider: string;
    refresh_token: string;
  };
}