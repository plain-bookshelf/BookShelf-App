import styled from "@emotion/native";

export const Container = styled.ScrollView`
  flex: 1;
`

export const BookContainer = styled.View`
  align-items: center;
  padding-bottom: 24px;
`

export const BookBox = styled.View`
  width: 100%;
  padding: 0px 24px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
`

export const BookPressable = styled.Pressable<{ imageHeight: number }>`
  height: ${({ imageHeight }) => imageHeight}px;
  justify-content: flex-end;
`

export const NotFound = styled.View`
  align-items: center;
  justify-content: flex-end;
  gap: 64px;
  height: 189px;
`