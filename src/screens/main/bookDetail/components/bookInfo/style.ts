import styled from "@emotion/native";
import { LinearGradient } from "react-native-linear-gradient";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const BookInfoTextBox = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 4px;
`

export const BookImageBox = styled.View`
  position: relative;
  width: 200px;
  height: 289px;
  margin: 12px 0px 20px;
`

export const StoryBox = styled.View<{ showFullStory: boolean }>`
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: ${({ showFullStory }) => showFullStory ? "auto" : "164px"};
  overflow-y: ${({ showFullStory }) => showFullStory ? "visible" : "hidden"};
  gap: 4px;
`

export const BlurBox = styled(LinearGradient)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 65px;
`

export const ShowFullStoryButton = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`