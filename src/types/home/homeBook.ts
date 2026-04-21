export type BookFindType = "POPULAR" | "RECENT";

export interface HomeBook {
  rank?: number;
  id: number;
  bookImage: string;
  title: string;
  author: string;
  genreList: string[];
}

export interface HomeBookResponse {
  status: string;
  message: string;
  data: {
    content: HomeBook[];
  };
}
