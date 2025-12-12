import { colorStyle } from "@/styles/colorStyle";
import { fontStyle } from "@/styles/fontStyle";
import styled from "styled-components/native";

const INPUT_WIDTH_MAP = {
  small: 240,
  large: 364,
} as const

export type InputSize = keyof typeof INPUT_WIDTH_MAP;

interface InputProps {
  size: InputSize;
  isError?: boolean,
  isFocused?: boolean,
}

export const InputBox = styled.View`
  flex-direction: column;
  gap: 4px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${( colorStyle.defaultGray )}`
})<InputProps>`
  color: ${( colorStyle.defaultBlack )};
  ${( fontStyle.regular16 )};
  width: ${({ size }) => INPUT_WIDTH_MAP[size]}px;
  height: 48px;
  border-width: 1px;
  border-color: ${({ isFocused, isError }) => isFocused ? colorStyle.defaultGreen : isError ? colorStyle.defaultRed : colorStyle.defaultBlack};
  border-radius: 8px;
  align-items: center;
  padding-left: 12px;
`

export const ErrorContainer = styled.View<InputProps>`
  flex-direction: row;
  align-items: center;
  width: ${({ size }) => INPUT_WIDTH_MAP[size]}px;
  gap: 6px;
  padding-left: 2px;
`