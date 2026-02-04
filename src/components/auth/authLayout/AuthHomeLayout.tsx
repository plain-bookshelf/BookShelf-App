import { colorStyle } from "@/styles/colorStyle";
import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface AuthLayoutProps{
  children: React.ReactNode;
}

export default function AuthHomeLayout({ children }: AuthLayoutProps){
  return(
    <LayoutContainer>
         {children}
    </LayoutContainer>
  )
}

const LayoutContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 92px 24px 173px; /* bottom쪽 padding은 디자이너한테 문의 해둔 상태 추후 변경 */
  background-color: ${colorStyle.whiteBackground};
`