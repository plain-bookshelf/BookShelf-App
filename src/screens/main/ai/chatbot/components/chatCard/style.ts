import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

interface ChatCardProps {
  who: "user" | "ai";
}

export const Container = styled.View<ChatCardProps>`
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ who }) => (who === "user" ? "flex-end" : "flex-start")};
  width: 100%;
  gap: 8px;
`;

export const TextBox = styled.Text<ChatCardProps>`
  max-width: 200px;
  padding: 16px;
  background-color: ${({ who }) => who === "user" ? colorStyle.defaultGreen : colorStyle.defaultWhite};
  border-radius: ${({ who }) => who === "user" ? "8px 8px 0px 8px" : "0px 8px 8px 8px"};
`