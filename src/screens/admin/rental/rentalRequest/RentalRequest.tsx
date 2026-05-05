import { colorStyle } from "@/styles/colorStyle";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";

export default function RentalRequest() {
  return (
    <S.Container>
      <S.ContentBox>
        <Typography font="semiBold16" color="defaultBlack" children="유저 이름" />
        <Typography font="medium16" color="defaultBlack" children="책 이름" />
      </S.ContentBox>
      <S.ButtonBox>
        <S.Button backgroundColor={colorStyle.defaultGreen} onPress={() => {}}>
          <Typography font="medium14" color="defaultWhite" children="대여" />
        </S.Button>
        <S.Button backgroundColor={colorStyle.requestGray} onPress={() => {}}>
          <Typography font="medium14" color="defaultBlack" children="취소" />
        </S.Button>
      </S.ButtonBox>
    </S.Container>
  )
}