import * as S from "./style"
import RankUser from "./components/rankUser/RankUser";
import img_profile_test from "@/assets/img_profile_test.png"
import TopRankUser from "./components/topRankUser/TopRankUser";
import { View } from "react-native";
import BookBar from "@/components/common/bookBar/BookBar";

export default function RankingScreen() {

  const MOCK_DATA = [
    { id: 1, rank: 1, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 2, rank: 2, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 3, rank: 3, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 4, rank: 4, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 5, rank: 5, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 6, rank: 6, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 7, rank: 7, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 8, rank: 8, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 9, rank: 9, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 10, rank: 10, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 11, rank: 11, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 12, rank: 12, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 13, rank: 13, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 14, rank: 14, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 15, rank: 15, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 16, rank: 16, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 17, rank: 17, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 18, rank: 18, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 19, rank: 19, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
    { id: 20, rank: 20, profileImage: img_profile_test, profileName: "John Doe", bookPoint: 100 },
  ]
  
  const TOP_RANK_USER = [MOCK_DATA[1], MOCK_DATA[0], MOCK_DATA[2]];
  
  const RANK_USER = MOCK_DATA.slice(3);

  return(
    <S.Container>
      <View>
        <S.TopRankUserBox>
          {TOP_RANK_USER.map((user) => (
            <TopRankUser key={user.id} rank={user.rank as 1 | 2 | 3} profileImage={user.profileImage} profileName={user.profileName} bookPoint={user.bookPoint} />
          ))}
        </S.TopRankUserBox>
        <BookBar />
      </View>
      <S.RankUserBox>
        {RANK_USER.map((user) => (
          <RankUser key={user.id} rank={user.rank} profileImage={user.profileImage} profileName={user.profileName} bookPoint={user.bookPoint} />
        ))}
      </S.RankUserBox>
    </S.Container>
  )
}