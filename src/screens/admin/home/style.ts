import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 80px 24px 40px;
  background-color: ${colorStyle.defaultWhite};
`

export const Content = styled.View`
  gap: 12px;
`

export const LogoutButton = styled.Pressable`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${colorStyle.defaultGreen};
`
