import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 32px 24px 0px;
  background-color: ${colorStyle.defaultWhite};
`

export const Content = styled.View`
  flex: 1;
  gap: 8px;
`

export const LogoutButton = styled.Pressable`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${colorStyle.defaultGreen};
`
