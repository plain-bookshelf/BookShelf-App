import * as S from "./style"

interface AuthLayoutProps{
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return(
    <S.LayoutContainer>
      <S.InnerLayout>
        {children}
      </S.InnerLayout>
    </S.LayoutContainer>
  )
}