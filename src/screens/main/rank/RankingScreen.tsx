import * as S from "./style"
import RankUser from "./components/rankUser/RankUser";
import TopRankUser from "./components/topRankUser/TopRankUser";
import { View } from "react-native";
import BookBar from "@/components/common/bookBar/BookBar";
import { useRanking } from "@/hooks/useRanking";

export default function RankingScreen() {
  const { ranking } = useRanking();
  
  const TOP = ranking?.slice(0, 3);
  const TOP_RANK_USER = TOP ? [TOP[1], TOP[0], TOP[2]] : [];

  
  const RANK_USER = ranking?.slice(3);

  return(
    <S.Container>
      <View>
        <S.TopRankUserBox>
          {TOP_RANK_USER?.map((user) => (
            <TopRankUser key={user.member_id} rank={user.rank as 1 | 2 | 3} profileImage={user.profile_image} profileName={user.nick_name} bookPoint={user.one_month_statistics} />
          ))}
        </S.TopRankUserBox>
        <BookBar />
      </View>
      <S.RankUserBox>
        {RANK_USER?.map((user) => (
          <RankUser key={user.member_id} rank={user.rank} profileImage={user.profile_image} profileName={user.nick_name} bookPoint={user.one_month_statistics} />
        ))}
      </S.RankUserBox>
    </S.Container>
  )
}