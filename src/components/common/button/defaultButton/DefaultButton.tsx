import { FontKey } from "@/styles/fontStyle"
import * as S from "./style"
import { Pressable } from "react-native"

interface DefaultButtonProps {
  font: FontKey;
  label: string;
  onPress?: () => void;
  isValid: boolean;
}

/**
 * @param size small, middle, large 중에 버튼 크기 선택
 * @param font fontStyle 에 있는 style 중 하나 선택
 * @param label 버튼 내에 들어갈 Text 입력
 * @param onPress 버튼 클릭 시 실행할 함수 입력
 * @returns pressed 까지 적용된 버튼 생성
 */
export default function DefaultButton({ font, label, onPress, isValid }: DefaultButtonProps) {
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