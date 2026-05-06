import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rental, reservation } from "@/services/lending";

export const useLending = () => {
  const queryClient = useQueryClient();

  const handleSuccess = (_data: unknown, bookId: number) => {
    queryClient.invalidateQueries({ queryKey: ["bookDetail", bookId] });
    queryClient.invalidateQueries({ queryKey: ["lendingInfo"] });
    queryClient.invalidateQueries({ queryKey: ["my"] });
  };

  const RentalMutation = useMutation({
    mutationFn: async (bookId: number) => await rental(bookId),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("도서 대여 요청 실패", error);
    },
  });

  const ReservationMutation = useMutation({
    mutationFn: async (bookId: number) => await reservation(bookId),
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("도서 예약 실패", error);
    },
  });

  return { RentalMutation, ReservationMutation };
};
