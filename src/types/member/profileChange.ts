export interface ProfileChangeRequest {
  new_profile_image_url: string;
}

export interface ProfileChangeResponse {
  status: string;
  message: string;
  data: string;
}
