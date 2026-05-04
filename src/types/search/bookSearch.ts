export interface BookSearch {
  book_affiliation_id: number;
  book_image: string;
}

export interface BookSearchRequest {
  keyword: string;
  page?: number;
  size?: number;
}

export interface BookSearchResponse {
  status: string;
  message: string;
  data: {
    content: BookSearch[];
    is_last_page: boolean;
  };
}