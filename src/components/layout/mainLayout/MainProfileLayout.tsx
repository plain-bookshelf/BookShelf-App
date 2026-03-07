import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface MainProfileLayoutProps{
  children: React.ReactNode;
}

export default function MainProfileLayout({ children }: MainProfileLayoutProps){
  return(
    <LayoutContainer>
         {children}
    </LayoutContainer>
  )
}

const LayoutContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 24px;
  background-color: ${colorStyle.profileBackgroundGray};
`