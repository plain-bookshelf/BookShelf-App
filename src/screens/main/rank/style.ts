import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const Container = styled.View`
  flex: 1;
  padding-top: 44px;
  gap: 24px;
  background-color: ${colorStyle.defaultWhite};
`

export const TopRankUserBox = styled.View`
  width: 100%;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`

export const RankUserBox = styled.ScrollView`
  flex: 1;
`