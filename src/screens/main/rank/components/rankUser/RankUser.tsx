import Typography from "@/components/common/typography/Typography";
import * as S from "./style"
import { Image } from "react-native";

export interface RankUserProps {
  rank: number;
  profileImage: string;
  profileName: string;
  bookPoint: number;
}

export default function RankUser({ rank, profileImage, profileName, bookPoint }: RankUserProps) {
  return(
    <S.Container>
      <S.LeftBox>
        <Typography font='semiBold20' color='defaultBlack' children={rank.toString()} />
        <S.ProfileBox>
          <Image source={{ uri: profileImage }} style={{ width: 32, height: 32 }} />
          <Typography font='medium20' color='defaultBlack' children={profileName} />
        </S.ProfileBox>
      </S.LeftBox>
      <Typography font='medium20' color='defaultBlack' children={`${bookPoint.toString()}권`} />
    </S.Container>
  )
}