import Typography from "@/components/common/typography/Typography";
import { useRentalRequests } from "@/hooks";
import * as S from "./style";
import RentalRequest from "./rentalRequest/RentalRequest";

export default function AdminHomeScreen() {
  const {
    requests,
    isConnected,
    errorMessage,
    RentalRequestApprovalMutation,
  } = useRentalRequests();
  const emptyMessage = isConnected
    ? "대기 중인 책 요청이 없습니다."
    : "책 요청 연결 중입니다.";

  const handleApproveRentalRequest = (bookDetailId: number) => {
    RentalRequestApprovalMutation.mutate(bookDetailId);
  };

  const renderRentalRequests = () => {
    if (errorMessage) {
      return <Typography font="medium16" color="defaultBlack" children={errorMessage} />;
    }

    if (requests.length === 0) {
      return <Typography font="medium16" color="defaultBlack" children={emptyMessage} />;
    }

    return requests.map((request) => (
      <RentalRequest
        key={`${request.book_detail_id}-${request.member_id}`}
        request={request}
        isApprovalPending={RentalRequestApprovalMutation.isPending}
        onApprove={handleApproveRentalRequest}
      />
    ));
  };

  return (
    <S.Container>
      <S.Content>{renderRentalRequests()}</S.Content>
    </S.Container>
  );
}
