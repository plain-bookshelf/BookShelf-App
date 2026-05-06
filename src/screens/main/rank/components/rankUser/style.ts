import styled from "@emotion/native";

interface CompactProps {
  isCompact: boolean;
}

export const Container = styled.View<CompactProps>`
  width: 100%;
  min-height: ${({ isCompact }) => isCompact ? "48px" : "52px"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0px ${({ isCompact }) => isCompact ? "16px" : "24px"};
`

export const LeftBox = styled.View<CompactProps>`
  flex: 1;
  min-width: 0;
  flex-direction: row;
  align-items: center;
  gap: ${({ isCompact }) => isCompact ? "12px" : "20px"};
`

export const RankTextBox = styled.View`
  width: 24px;
  flex-shrink: 0;
`

export const ProfileBox = styled.View`
  flex: 1;
  min-width: 0;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ProfileImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  flex-shrink: 0;
`;

export const BookPointBox = styled.View`
  flex-shrink: 0;
  max-width: 96px;
`;