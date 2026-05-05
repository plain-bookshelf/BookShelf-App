import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";
import { Animated, Pressable } from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Container = styled(AnimatedPressable)`
  z-index: 1000;
  position: relative;
  top: 23px;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${colorStyle.recommandIdBackground};
`

export const CloseMessage = styled.View`
  position: absolute;
  bottom: 8px;
  right: 16px;
`