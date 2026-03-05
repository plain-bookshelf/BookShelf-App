import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

interface RankProps {
  rank: 1 | 2 | 3;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export const ProfileBox = styled.View`
  position: relative;
`

export const ProfileImage = styled.Image<RankProps>(({ rank }) => ({
  width: rank === 1 ? 96 : rank === 2 ? 80 : 72,
  height: rank === 1 ? 96 : rank === 2 ? 80 : 72,
  borderRadius: rank === 1 ? 48 : rank === 2 ? 40 : 36,
}));

export const Ranking = styled.View<RankProps>(({ rank }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor:
    rank === 1 ? colorStyle.rankYellow : rank === 2 ? colorStyle.rankGray : colorStyle.rankCopper,
  width: rank === 1 ? 32 : rank === 2 ? 26 : 24,
  height: rank === 1 ? 32 : rank === 2 ? 26 : 24,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: rank === 1 ? 16 : rank === 2 ? 13 : 12,
}))

export const ProfileName = styled.View`
  padding: 16px 0px 4px;
`

export const BookPoint = styled.View`
  justify-content: center;
  align-items: center;
  padding: 3px 16px;
  border-radius: 8px;
  background-color: ${colorStyle.defaultGreen};
`