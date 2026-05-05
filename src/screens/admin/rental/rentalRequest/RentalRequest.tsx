import { colorStyle } from "@/styles/colorStyle";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import type { RentalRequestItem } from "@/types";

interface RentalRequestProps {
  request: RentalRequestItem;
  isApprovalPending: boolean;
  onApprove: (bookDetailId: number) => void;
}

export default function RentalRequest({
  request,
  isApprovalPending,
  onApprove,
}: RentalRequestProps) {
  const bookInfo = `${request.title} (${request.call_number})`;

  return (
    <S.Container>
      <S.ContentBox>
        <Typography font="semiBold16" color="defaultBlack" children={request.nick_name} />
        <Typography font="medium16" color="defaultBlack" children={bookInfo} />
      </S.ContentBox>
      <S.ButtonBox>
        <S.Button
          backgroundColor={colorStyle.defaultGreen}
          disabled={isApprovalPending}
          onPress={() => onApprove(request.book_detail_id)}
        >
          <Typography font="medium14" color="defaultWhite" children="대여" />
        </S.Button>
        <S.Button backgroundColor={colorStyle.requestGray} onPress={() => {}}>
          <Typography font="medium14" color="defaultBlack" children="취소" />
        </S.Button>
      </S.ButtonBox>
    </S.Container>
  );
}