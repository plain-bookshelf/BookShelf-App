import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View`
  width: 105px;
  height: 92px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 0px;
  background-color: ${colorStyle.defaultWhite};
`

export const ActionCardContainer = styled.View`
  width: 100%;
  gap: 16px;
`