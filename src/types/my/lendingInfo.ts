export interface BookInfo {
  bookAffiliation_id: number;
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
    lending_book_list_result: {
      rentalBookInfo: RentalBookInfo[];
      reservationBookInfo: ReservationBookInfo[];
      overdue_book_info: OverDueBookInfo[];
    };
  };
}