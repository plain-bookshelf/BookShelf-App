export interface ViewMyPageResult {
  most_little_left_rental_date: number;
  most_little_left_rental_title: string;
  overdue_book_count: number;
  profile_image: string;
  rented_book_count: number;
  reserved_book_count: number;
  username: string;
  nickname?: string;
}

export interface MyResponse {
  status: string;
  message: string;
  data: ViewMyPageResult;
}
