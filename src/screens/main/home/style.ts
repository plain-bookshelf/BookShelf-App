import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View`
  background-color: ${( colorStyle.defaultWhite )};
  flex: 1;
`

export const BookListBox = styled.ScrollView`
  flex: 1
`

export const TitleBox = styled.View`
  padding: 20px 0px 16px 14px;
`