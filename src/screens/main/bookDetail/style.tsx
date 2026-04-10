import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";
import LinearGradient from "react-native-linear-gradient";

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 22px 24px 10px;
  background-color: ${colorStyle.defaultWhite};
`

export const Container = styled.ScrollView`
  flex: 1;
  position: relative;
  background-color: ${colorStyle.defaultWhite};
`

export const Content = styled.View`
  flex-direction: column;
  gap: 32px;
  padding: 11px 24px 99px;
`

export const CommentsBox = styled.View`
  flex-direction: column;
  gap: 12px;
`

export const CommentList = styled.View`
  flex-direction: column;
  gap: 8px;
`

export const BlurBox = styled(LinearGradient)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 110px;
`

export const ShowFullStoryButton = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`

export const RecommandBookListBox = styled.View`
  flex-direction: column;
  gap: 12px;
`

export const RecommandBookList = styled.ScrollView`
  flex-direction: row;
  flex: 1;
`

export const RecommandBook = styled.Pressable`
  padding-right: 16px;
`

export const ActionButtonBox = styled.View`
  position: absolute;
  bottom: 52px;
  padding: 0px 24px;
  width: 100%;
  height: 52px;
`