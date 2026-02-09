import { ColorKey, colorStyle } from "@/styles/colorStyle";
import { FontKey, fontStyle } from "@/styles/fontStyle";
import styled from "@emotion/native";

export const StyledText = styled.Text<{ font: FontKey, color: ColorKey, decoration: boolean }>`
  color: ${({ color }) => colorStyle[color]};
  ${({ font }) => fontStyle[font]}
  text-decoration: ${({ decoration }) => decoration ? 'underline' : 'none'};
`