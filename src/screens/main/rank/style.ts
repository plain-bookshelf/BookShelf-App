import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const Container = styled.View`
  padding-top: 44px;
  gap: 32px;  
  flex: 1;
  background-color: ${colorStyle.defaultWhite};
`

export const TopRankUserBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 38px;
`

export const RankUserBox = styled.ScrollView`
  flex: 1;
`