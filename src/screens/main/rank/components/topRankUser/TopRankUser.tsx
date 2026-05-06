import { useWindowDimensions } from "react-native";
import Typography from "@/components/common/typography/Typography";
import * as S from "./style"
import { FontKey } from "@/styles/fontStyle";

interface TopRankUserProps {
  rank: 1 | 2 | 3;
  profileImage: string;
  profileName: string;
  bookPoint: number;
}

export default function TopRankUser({ rank, profileImage, profileName, bookPoint }: TopRankUserProps) {
  const { width } = useWindowDimensions();
  const isCompact = width <= 360;
  const nameFont: FontKey = isCompact
    ? rank === 1 ? 'semiBold18' : 'semiBold14'
    : rank === 1 ? 'semiBold20' : rank === 2 ? 'semiBold18' : 'semiBold16';

  return(
    <S.Container>
      <S.ProfileBox>
        <S.ProfileImage rank={rank} isCompact={isCompact} source={{ uri: profileImage }} />
        <S.Ranking rank={rank} isCompact={isCompact}>
          <Typography font={isCompact ? 'medium12' : 'medium16'} color='defaultWhite' children={rank.toString()} />
        </S.Ranking>
      </S.ProfileBox>
      <S.ProfileName isCompact={isCompact}>
        <Typography font={nameFont} color='defaultBlack' children={profileName} numberOfLines={1} textAlign='center' />
      </S.ProfileName>
      <S.BookPoint isCompact={isCompact}>
        <Typography font={isCompact ? 'semiBold12' : 'semiBold16'} color='defaultWhite' children={`${bookPoint.toString()}권`} numberOfLines={1} />
      </S.BookPoint>
    </S.Container>
  )
}