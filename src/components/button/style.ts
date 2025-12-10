import styled from 'styled-components/native';
import { colorStyle } from '@/styles/colorStyle';
import { fontStyle, FontKey } from '@/styles/fontStyle';

const BTN_WIDTH_MAP = {
  small: 106,
  middle: 176,
  large: 364,
} as const;

export type BtnSize = keyof typeof BTN_WIDTH_MAP;

interface BtnProps {
  size: BtnSize;
  isPressed: boolean;
}

export const ButtonContainer = styled.View<BtnProps>`
  background-color: ${({ isPressed }) => isPressed ? colorStyle.darkGreen : colorStyle.defaultGreen};
  height: 48px;
  width: ${({ size }) => BTN_WIDTH_MAP[size]}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text<{ font: FontKey }>`
  color: ${colorStyle.defaultWhite};
  font-size: ${({ font }) => fontStyle[font].size};
  font-weight: ${({ font }) => fontStyle[font].weight};
`