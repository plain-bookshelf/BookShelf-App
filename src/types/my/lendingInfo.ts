export interface BookInfo {
  book_affiliation_id: number;
  book_image: string;
  title: string;
}

export interface RentalBookInfo extends BookInfo {
  left_rental_date: number;
}

export interface ReservationBookInfo extends BookInfo {
  rank: number;
}

export interface OverDueBookInfo extends BookInfo {
  overdue_date: number;
}

export interface LendingInfoResponse {
  status: string;
  message: string;
  data: {
    rental_book_info: RentalBookInfo[];
    reservation_book_info: ReservationBookInfo[];
    over_due_book_info: OverDueBookInfo[];
  };
}