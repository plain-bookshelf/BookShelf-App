import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

interface BarProps {
  width: number
}

export const BookBar = styled.View<BarProps>`
  background-color: ${colorStyle.defaultWhite};
  width: ${({ width }) => width}px;
  height: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`