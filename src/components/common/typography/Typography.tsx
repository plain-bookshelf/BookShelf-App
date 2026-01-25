import * as S from "./style"
import { FontKey } from "@/styles/fontStyle"
import { ColorKey } from "@/styles/colorStyle"

interface TypographyProps {
  children: string,
  font: FontKey,
  color: ColorKey,
  decoration?: boolean,
}

/**
 * @param children 화면에 표시 될 Text 입력
 * @param font fontStyle 에 있는 style 중 하나 선택
 * @param color colorStyle 에 있는 style 중 하나 선택
 * @returns 스타일 적용된 Text 생성
 */
export default function Typography({ children, font, color, decoration = false }: TypographyProps) {
  return(
    <S.StyledText font={font} color={color} decoration={decoration}>{children}</S.StyledText>
  )
}