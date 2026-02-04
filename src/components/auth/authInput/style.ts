import { colorStyle } from "@/styles/colorStyle";
import { fontStyle } from "@/styles/fontStyle";
import styled from "styled-components/native";

interface InputProps {
  isError?: boolean,
  isFocused?: boolean,
}

export const InputBox = styled.View`
  flex-direction: column;
  gap: 16px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${( colorStyle.defaultGray )}`
})<InputProps>`
  color: ${( colorStyle.defaultBlack )};
  ${( fontStyle.regular16 )};
  width: 100%;
  height: 48px;
  background-color: ${( colorStyle.inputBarGray )};
  border-width: 1px;
  border-color: ${({ isFocused, isError }) => isFocused ? colorStyle.defaultBlack : isError ? colorStyle.defaultRed : colorStyle.inputBarGray};
  border-radius: 8px;
  align-items: center;
  padding-left: 12px;
`

export const ErrorContainer = styled.View<InputProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 6px;
  padding-left: 2px;
`