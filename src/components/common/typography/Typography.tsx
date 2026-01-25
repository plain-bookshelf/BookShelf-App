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
 * Render text with the specified font, color, and optional decoration.
 *
 * @param children - The text content to display
 * @param font - A key from `fontStyle` selecting the font to apply
 * @param color - A key from `colorStyle` selecting the color to apply
 * @param decoration - Whether to apply text decoration (defaults to `false`)
 * @returns The styled Text element that renders `children` with the given styles
 */
export default function Typography({ children, font, color, decoration = false }: TypographyProps) {
  return(
    <S.StyledText font={font} color={color} decoration={decoration}>{children}</S.StyledText>
  )
}