import { ColorKey, colorStyle } from "@/styles/colorStyle";
import { FontKey, fontStyle } from "@/styles/fontStyle";
import styled from "styled-components/native";

export const StyledText = styled.Text<{ font: FontKey, color: ColorKey }>`
  color: ${({ color }) => colorStyle[color]};
  ${({ font }) => fontStyle[font]};
`