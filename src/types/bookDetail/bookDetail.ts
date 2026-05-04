export interface BookDetail {
  affiliation_name: string;
  book_info: {
    title: string;
    author: string;
    publication_date: string;
    introduction: string;
    book_image: string;
    publisher: string;
  };
  is_enable_rental: boolean;
  genres: {
    book_id: number;
    genre: {
      id: number;
      genre_name: string;
    };
  }[];
  is_liked: boolean;
}

export interface BookDetailResponse {
  status: string;
  message: string;
  data: BookDetail;
}