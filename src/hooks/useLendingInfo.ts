import { useQuery } from "@tanstack/react-query";
import { getLendingInfo } from "@/services/my/lendingInfo";

export const useLendingInfo = () => {
  const query = useQuery({
    queryKey: ["lendingInfo"],
    queryFn: getLendingInfo,
  });

  const lendingInfo = query?.data?.data?.lending_book_list_result;

  const rentalBooks = lendingInfo?.rentalBookInfo;
  const reservationBooks = lendingInfo?.reservationBookInfo;
  const overDueBooks = lendingInfo?.overdue_book_info;

  return { ...query, rentalBooks, reservationBooks, overDueBooks };
};