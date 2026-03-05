import Typography from "@/components/common/typography/Typography";
import * as S from "./style"
import { Image } from "react-native";
import { RankUserProps } from "@/types/main";

export default function RankUser({ rank, profileImage, profileName, bookPoint }: RankUserProps) {
  return(
    <S.Container>
      <S.LeftBox>
        <Typography font='semiBold20' color='defaultBlack' children={rank.toString()} />
        <S.ProfileBox>
          <Image source={profileImage} style={{ width: 32, height: 32 }} />
          <Typography font='medium20' color='defaultBlack' children={profileName} />
        </S.ProfileBox>
      </S.LeftBox>
      <Typography font='medium20' color='defaultBlack' children={`${bookPoint.toString()}권`} />
    </S.Container>
  )
}