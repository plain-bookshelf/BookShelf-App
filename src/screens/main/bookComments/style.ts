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

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colorStyle.defaultWhite};
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const MessageInputBox = styled.View<{ isFocused: boolean }>`
  position: absolute;
  width: 100%;
  padding: 0px 24px 52px;
  bottom: 0px;
`;

export const backgroundBlur = styled.Pressable`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${colorStyle.bookCommentsBackgroundBlur};
  opacity: 0.4;
`;