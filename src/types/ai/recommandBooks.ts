export interface RecommandBook {
  id: number;
  title: string;
  img: string;
  dis: number;
}

export interface RecommandBooksResponse {
  books: RecommandBook[];
}