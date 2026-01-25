import { FontKey } from "@/styles/fontStyle"
import * as S from "./style"
import { Pressable } from "react-native"

interface ButtonProps {
  font: FontKey;
  label: string;
  onPress?: () => void;
  isValid: boolean;
}

/**
 * Render a button that displays a label using the selected font and disables itself when not valid.
 *
 * @param font - Key selecting which font style to apply to the label
 * @param isValid - When `false`, the button is disabled and will not call `onPress`
 * @returns A Pressable button element that applies pressed-state and validity styling and displays the label
 */
export default function Button({ font, label, onPress, isValid }: ButtonProps) {
  return(
    <Pressable disabled={!isValid} onPress={onPress}>
      {({ pressed }) => (
        <S.ButtonContainer isPressed={pressed} isVaild={isValid}>
         <S.ButtonText font={font}>{label}</S.ButtonText>
        </S.ButtonContainer>
      )}
    </Pressable>
  )
}