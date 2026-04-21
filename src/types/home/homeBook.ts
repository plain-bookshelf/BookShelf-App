export type BookFindType = "POPULAR" | "RECENT";

export interface HomeBook {
  rank?: number;
  id: number;
  bookImage: string;
  title: string;
  author: string;
  genreList: string[];
}

export interface HomeBookSliceResult {
  content: HomeBook[];
  isLastPage: boolean;
}

export interface HomeBookResponse {
  status: string;
  message: string;
  data: {
    SliceResult: HomeBookSliceResult;
  };
}
