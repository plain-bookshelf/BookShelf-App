import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const Container = styled.View`
  flex: 1;
  background-color: ${colorStyle.defaultWhite};
`

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 24px 10px;
`

export const ContentBox = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`

export const ProfileCard = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0px;
`

export const ProfileImagBox = styled.Pressable`
  position: relative;
  width: 72px;
  height: 72px;
`

export const ProfileName = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const InputBox = styled.View`
  width: 100%;
  padding: 0px 18px;
  flex-direction: column;
  gap: 16px;
`

export const ButtonBox = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 24px 16px;
`