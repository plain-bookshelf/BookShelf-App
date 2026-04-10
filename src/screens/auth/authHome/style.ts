import { colorStyle } from "@/styles/colorStyle"
import styled from "@emotion/native"

export const TitleBox = styled.View`
  gap: 8px;
  padding-bottom: 41px;
`

export const LoginForm = styled.View`
  gap: 32px;
  padding-bottom: 16px;
`

export const InputBox = styled.View`
  gap: 16px;
`

export const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding-bottom: 52px;
`

export const MenuBox = styled.Pressable`
  width: 100px;
  height: 25px;
  justify-content: center;
  align-items: center;
`

export const SocialLoginContainer = styled.View`
  gap: 20px;
`

export const SocialLoginTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const SocialLoginLine = styled.View`
  flex-direction: row;
  flex: 1;
  height: 1px;
  background-color: ${colorStyle.lineGray};
`

export const SocialLoginButtonBox = styled.View`
  gap: 12px;
`

export const SocialLoginButton = styled.Pressable`
  overflow: hidden;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
`