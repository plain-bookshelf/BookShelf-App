import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 22px 24px 10px;
  background-color: ${colorStyle.defaultWhite};
`

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colorStyle.defaultWhite};
  padding: 20px 24px;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 8px;
`