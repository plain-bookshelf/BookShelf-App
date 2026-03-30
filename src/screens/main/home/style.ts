import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View`
  background-color: ${( colorStyle.defaultWhite )};
  flex: 1;
`

export const TitleBox = styled.View<{ isPopularBooks: boolean }>`
  flex-direction: row;
  justify-content: ${({ isPopularBooks }) => isPopularBooks ? "flex-end" : "flex-start"};
  align-items: center;
  gap: 82px;
  padding: 21px 24px 15px;
`