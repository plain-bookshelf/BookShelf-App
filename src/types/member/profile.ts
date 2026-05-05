export interface ProfileImageUrlRequest {
  file_name: string;
  content_type: string;
  file_size: number;
}

export interface ProfileImageUrlResponse {
  status: string;
  message: string;
  data: {
    upload_url: string;
    image_key: string;
    public_url: string;
    expires_at: string;
  };
}

export interface ProfileChangeRequest {
  image_key: string;
}

export interface ProfileChangeResponse {
  status: string;
  message: string;
  data: string;
}
