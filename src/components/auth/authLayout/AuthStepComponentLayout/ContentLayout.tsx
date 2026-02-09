import { View } from "react-native";

interface ContentLayoutProps{
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return(
    <View style={{ flex:1, gap: 8 }}>
      {children}
    </View>
  )
}