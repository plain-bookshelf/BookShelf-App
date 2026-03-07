import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const Container = styled.Pressable`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  gap: 8px;
  background-color: ${colorStyle.defaultWhite};
`