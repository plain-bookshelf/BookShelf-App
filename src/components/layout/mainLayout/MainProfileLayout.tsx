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
  padding: 20px 24px 0px;
  background-color: ${colorStyle.profileBackgroundGray};
`