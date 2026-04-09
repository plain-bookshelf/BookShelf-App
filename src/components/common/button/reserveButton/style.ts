import styled from '@emotion/native';
import { colorStyle } from '@/styles/colorStyle';
import { fontStyle, FontKey } from '@/styles/fontStyle';

interface BtnProps {
  isPressed: boolean;
  isVaild: boolean;
}

export const ButtonContainer = styled.View<BtnProps>`
  background-color: ${colorStyle.defaultWhite};
  border: 1px solid ${colorStyle.defaultGreen};
  height: 48px;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text<{ font: FontKey }>`
  color: ${colorStyle.defaultGreen};
  ${({ font: type }) => fontStyle[type]}; 
`