export type BookFindType = "POPULAR" | "RECENT";

export interface HomeBook {
  rank?: number;
  id: number;
  book_image: string;
  title: string;
  author: string;
  genre_list: string[];
}

export interface HomeBookResponse {
  status: string;
  message: string;
  data: HomeBook[];
}
