import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";

export const ProfileCardContainer = styled.View`
  padding: 20px 0px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const ContentBox = styled.View`
  padding: 12px 0px;
`


export const ProfileImage = styled.Image`
  width: 72px;
  height: 72px;
`

export const TitleBox = styled.View`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: ${colorStyle.defaultWhite};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const InfoCardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const ActionCardBox = styled.View`
  width: 100%;
  gap: 16px;
`