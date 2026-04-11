import { ColorKey, colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View<{ backgroundColor: ColorKey }>`
  width: 100%;
  background-color: ${({ backgroundColor }) =>  colorStyle[backgroundColor]};
  height: 48px;
  padding: 0px 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.TextInput`
  width: 90%;
  height: 100%;
  padding: 0px 16px;
`