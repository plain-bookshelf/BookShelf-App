export interface Comment {
  profile_image: string;
  comment_id: number;
  nickname: string;
  comment: string;
  like_count: number;
  is_liked: boolean;
}

export interface CommentResponse {
  status: string;
  message: string;
  data: {
    content: Comment[];
    is_last_page: boolean;
  };
}