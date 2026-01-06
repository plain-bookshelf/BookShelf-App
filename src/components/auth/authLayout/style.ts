import { colorStyle } from "@/styles/colorStyle";
import styled from "styled-components/native";

export const LayoutContainer = styled.SafeAreaView`
  flex: 1;
  padding: 41px 24px 52px;
  background-color: ${colorStyle.whiteBackground};
`

export const InnerLayout = styled.View`
  flex: 1;
`