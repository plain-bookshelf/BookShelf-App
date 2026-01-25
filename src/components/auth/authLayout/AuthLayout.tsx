import { View } from "react-native";
import * as S from "./style"

interface AuthLayoutProps{
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return(
    <S.LayoutContainer>
         {children}
    </S.LayoutContainer>
  )
}