import { View } from "react-native";

interface ContentLayoutProps{
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return(
    <View style={{ gap: 8 }}>
      {children}
    </View>
  )
}