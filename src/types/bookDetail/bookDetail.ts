export interface BookDetail {
  BookDetailPageResult: {
    affiliationName: string;
    bookInfo: {
    title: string;
    author: string;
    publicationDate: string;
    introduction: string;
    bookImage: string;
    publisher: string;
  };
  isEnableRental: boolean;
  isLiked: boolean;
  };
}

export interface BookDetailResponse {
  status: string;
  message: string;
  data: BookDetail;
}