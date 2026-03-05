import Typography from "@/components/common/typography/Typography";
import * as S from "./style"

interface TopRankUserProps {
  rank: 1 | 2 | 3;
  profileImage: any;
  profileName: string;
  bookPoint: number;
}

export default function TopRankUser({ rank, profileImage, profileName, bookPoint }: TopRankUserProps) {
  return(
    <S.Container>
      <S.ProfileBox>
        <S.ProfileImage rank={rank} source={profileImage} />
        <S.Ranking rank={rank}>
          <Typography font='medium16' color='defaultWhite' children={rank.toString()} />
        </S.Ranking>
      </S.ProfileBox>
      <S.ProfileName>
        <Typography font={rank === 1 ? 'semiBold20' : rank === 2 ? 'semiBold18' : 'semiBold16'} color='defaultBlack' children={profileName} />
      </S.ProfileName>
      <S.BookPoint>
        <Typography font='semiBold16' color='defaultWhite' children={`${bookPoint.toString()}권`} />
      </S.BookPoint>
    </S.Container>
  )
}