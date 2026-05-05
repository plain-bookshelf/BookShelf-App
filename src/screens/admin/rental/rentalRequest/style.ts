import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

export const Container = styled.View`
  flex: 1;
  height: 76px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentBox = styled.View`
  flex: 1;
  gap: 6px;
`

export const ButtonBox = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const Button = styled.Pressable<{ backgroundColor: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 72px;
  height: 32px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;