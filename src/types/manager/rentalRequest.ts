export interface RentalRequestItem {
  book_detail_id: number;
  member_id: number;
  nick_name: string;
  title: string;
  call_number: string;
}

export interface RentalRequestSnapshot {
  requests: RentalRequestItem[];
}

export interface RentalRequestApprovalResponse {
  status: string;
  message: string;
  data: string;
}
