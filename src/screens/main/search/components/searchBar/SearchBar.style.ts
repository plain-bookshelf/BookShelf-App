import styled from "@emotion/native";
import { fontStyle } from "@/styles/fontStyle";

interface CompactProps {
  isCompact: boolean;
}

export const Container = styled.View<CompactProps>`
  width: 100%;
  padding: 12px ${({ isCompact }) => isCompact ? "16px" : "20px"} 0px ${({ isCompact }) => isCompact ? "16px" : "20px"};
  flex-direction: row;
  align-items: center;
  gap: ${({ isCompact }) => isCompact ? "10px" : "16px"};
`

export const BackButton = styled.Pressable`
  flex-shrink: 0;
`

export const BackIcon = styled.Image<CompactProps>`
  width: ${({ isCompact }) => isCompact ? "24px" : "28px"};
  height: ${({ isCompact }) => isCompact ? "24px" : "28px"};
`

export const SearchBar = styled.TextInput<CompactProps>`
  flex: 1;
  min-width: 0;
  align-items: center;
  padding-left: 4px;
  height: ${({ isCompact }) => isCompact ? "44px" : "48px"};
  ${({ isCompact }) => isCompact ? fontStyle.regular16 : fontStyle.regular18}
`