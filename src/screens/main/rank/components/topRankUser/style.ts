import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

interface RankProps {
  rank: 1 | 2 | 3;
  isCompact: boolean;
}

interface CompactProps {
  isCompact: boolean;
}

export const Container = styled.View`
  flex: 1;
  min-width: 0;
  justify-content: center;
  align-items: center;
`

export const ProfileBox = styled.View`
  position: relative;
`

export const ProfileImage = styled.Image<RankProps>(({ rank, isCompact }) => {
  const size = isCompact
    ? rank === 1 ? 80 : rank === 2 ? 68 : 60
    : rank === 1 ? 96 : rank === 2 ? 80 : 72;

  return {
    width: size,
    height: size,
    borderRadius: size / 2,
  };
});

export const Ranking = styled.View<RankProps>(({ rank, isCompact }) => {
  const badgeSize = isCompact
    ? rank === 1 ? 26 : rank === 2 ? 22 : 20
    : rank === 1 ? 32 : rank === 2 ? 26 : 24;

  return {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor:
      rank === 1 ? colorStyle.rankYellow : rank === 2 ? colorStyle.rankGray : colorStyle.rankCopper,
    width: badgeSize,
    height: badgeSize,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: badgeSize / 2,
  };
})

export const ProfileName = styled.View<CompactProps>(({ isCompact }) => ({
  width: "100%",
  paddingTop: isCompact ? 10 : 16,
  paddingBottom: 4,
}))

export const BookPoint = styled.View<CompactProps>`
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${({ isCompact }) => isCompact ? "3px 10px" : "3px 16px"};
  border-radius: 8px;
  background-color: ${colorStyle.defaultGreen};
`