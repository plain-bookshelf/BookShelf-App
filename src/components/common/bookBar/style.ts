import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

interface BarProps {
  width: number
}

export const Container = styled.View`
  flex: 1;
`

export const BookContainer = styled.View`
  align-items: center;
  padding-bottom: 24px;
`

export const BookBox = styled.View`
  flex-direction: row;
  gap: 16px;
`

export const BookBar = styled.View<BarProps>`
  background-color: ${colorStyle.defaultWhite};
  width: ${({ width }) => width}px;
  height: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`