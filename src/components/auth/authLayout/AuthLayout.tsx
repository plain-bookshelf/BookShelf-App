import { View } from "react-native";
import * as S from "./style"

interface AuthLayoutProps{
  children: React.ReactNode;
}

/**
 * Wraps children inside the authentication layout container.
 *
 * @param children - The content to render within the layout container.
 * @returns The rendered layout container element containing `children`.
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return(
    <S.LayoutContainer>
         {children}
    </S.LayoutContainer>
  )
}