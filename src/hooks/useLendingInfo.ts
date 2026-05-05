import { useQuery } from "@tanstack/react-query";
import { getLendingInfo } from "@/services/my/lendingInfo";

export const useLendingInfo = () => {
  const query = useQuery({
    queryKey: ["lendingInfo"],
    queryFn: getLendingInfo,
  });

  const lendingInfo = query.data?.data;

  const rentalBooks = lendingInfo?.rental_book_info;
  const reservationBooks = lendingInfo?.reservation_book_info;
  const overDueBooks = lendingInfo?.over_due_book_info;

  return { ...query, rentalBooks, reservationBooks, overDueBooks };
};