import { ColorKey, colorStyle } from "@/styles/colorStyle";
import { FontKey, fontStyle } from "@/styles/fontStyle";
import styled from "@emotion/native";

interface StyledTextProps {
  font: FontKey;
  color: ColorKey;
  decoration: boolean;
  textAlign?: "left" | "center" | "right";
}

export const StyledText = styled.Text<StyledTextProps>`
  color: ${({ color }) => colorStyle[color]};
  ${({ font }) => fontStyle[font]}
  text-decoration: ${({ decoration }) => decoration ? 'underline' : 'none'};
  text-align: ${({ textAlign }) => textAlign};
`