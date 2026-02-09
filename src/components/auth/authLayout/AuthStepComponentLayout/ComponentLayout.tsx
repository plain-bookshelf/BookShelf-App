import { colorStyle } from "@/styles/colorStyle";
import styled from "@emotion/native";

interface AuthLayoutProps{
  children: React.ReactNode;
}

export default function ComponentLayout({ children }: AuthLayoutProps) {
  return(
    <LayoutContainer>
         {children}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.View`
  flex: 1;
  padding: 0px 24px;
  background-color: ${colorStyle.defaultWhite};
`