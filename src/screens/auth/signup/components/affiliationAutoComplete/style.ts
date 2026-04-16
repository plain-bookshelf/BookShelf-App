import { colorStyle } from "@/styles/colorStyle";
import { fontStyle } from "@/styles/fontStyle";
import styled from "@emotion/native";

export const RowText = styled.Text`
  ${fontStyle.medium14}
`;

export const Container = styled.View`
  width: 100%;
  background-color: ${colorStyle.modalInputBackgroundGray};
  border-radius: 8px;
  padding: 8px 0px;
`

export const AutocompleteItem = styled.Pressable`
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  justify-content: center;
`