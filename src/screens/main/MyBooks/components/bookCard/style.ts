import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const BookCard = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 96px;
  background-color: ${colorStyle.defaultWhite};
  border-radius: 8px;
  padding: 8px 24px;
  margin-bottom: 16px;
`;

export const BookCardTextBox = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;