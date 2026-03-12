import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const Backdrop = styled.View`
  flex: 1;
  padding: 252px 24px 0px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 100%;
  border-radius: 12px;
  background-color: ${colorStyle.defaultWhite};
`;

export const TextBox = styled.View`
  width: 100%;
  align-items: center;
  padding: 69px 0px 57px;
  gap: 8px;
`;

export const ButtonRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Button = styled.Pressable`
  width: 50%;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

