import Typography from "@/components/common/typography/Typography";
import * as S from "./style"
import { useWindowDimensions } from "react-native";

export interface RankUserProps {
  rank: number;
  profileImage: string;
  profileName: string;
  bookPoint: number;
}

export default function RankUser({ rank, profileImage, profileName, bookPoint }: RankUserProps) {
  const { width } = useWindowDimensions();
  const isCompact = width <= 360;
  const textFont = isCompact ? 'medium16' : 'medium20';

  return(
    <S.Container isCompact={isCompact}>
      <S.LeftBox isCompact={isCompact}>
        <S.RankTextBox>
          <Typography font={isCompact ? 'semiBold16' : 'semiBold20'} color='defaultBlack' children={rank.toString()} />
        </S.RankTextBox>
        <S.ProfileBox>
          <S.ProfileImage source={{ uri: profileImage }} />
          <Typography font={textFont} color='defaultBlack' children={profileName} numberOfLines={1} />
        </S.ProfileBox>
      </S.LeftBox>
      <S.BookPointBox>
        <Typography font={textFont} color='defaultBlack' children={`${bookPoint.toString()}권`} numberOfLines={1} />
      </S.BookPointBox>
    </S.Container>
  )
}