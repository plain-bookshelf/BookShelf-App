import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const Container = styled.View`
  flex: 1;
  background-color: ${colorStyle.profileBackgroundGray};
  padding: 0px 24px 24px;
`;

export const ChatCardContainer = styled.View`
  flex: 1;
  padding: 40px 0px 32px 0px;
`;

export const ChatCardList = styled.ScrollView`
  flex: 1;
`;