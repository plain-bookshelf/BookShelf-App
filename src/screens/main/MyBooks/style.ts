import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colorStyle.profileBackgroundGray};
  padding: 34px 24px;
`;

export const BookCardList = styled.ScrollView`
  flex: 1;
  flex-direction: column;
`;