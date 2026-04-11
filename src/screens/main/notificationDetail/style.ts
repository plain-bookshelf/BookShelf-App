import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 22px 24px 10px;
  background-color: ${colorStyle.defaultWhite};
`;

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  gap: 32px;
  padding: 32px 24px;
  background-color: ${colorStyle.defaultWhite};
`;

export const TextBox = styled.View`
  flex-direction: column;
  gap: 8px;
`

export const ImageBox = styled.View`
  width: 100%;
  align-items: center;
`