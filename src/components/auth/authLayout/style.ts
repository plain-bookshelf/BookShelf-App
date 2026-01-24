import { colorStyle } from "@/styles/colorStyle";
import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const LayoutContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 36px 24px 52px; /* bottom쪽 padding은 디자이너한테 문의 해둔 상태 추후 변경 */
  background-color: ${colorStyle.whiteBackground};
`