import { View } from "react-native";

interface ContentLayoutProps{
  children: React.ReactNode
}

/**
 * Wrapper layout that arranges its children with a fixed spacing of 8.
 *
 * @param children - Elements to be rendered inside the layout.
 * @returns A View that wraps `children` and applies a gap of 8.
 */
export default function ContentLayout({ children }: ContentLayoutProps) {
  return(
    <View style={{ gap: 8 }}>
      {children}
    </View>
  )
}