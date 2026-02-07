import { colorStyle } from "@/styles/colorStyle";
import styled from "styled-components/native";

interface GernreButtonBoxProps {
  isSelected: boolean
}

export const GenreButtonBox = styled.Pressable<GernreButtonBoxProps>`
  padding: ${({ isSelected }) => isSelected ? `4px 18px` : `6px 20px`};
  background-color: ${colorStyle.genreBackgroundGray};
  border: ${({ isSelected }) => isSelected ? `2px solid ${colorStyle.defaultBlack}` : `none`};
  border-radius: 32px;
  align-self: flex-start;
`