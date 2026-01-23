import Button from "@/components/common/button/Button"
import { Children, ReactNode } from "react"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface ActionLayoutProps {
  children: React.ReactNode;
  label: string;
  onNext: () => void;
  isValid: boolean;
}

export default function ActionLayout({ children, label, onNext, isValid }: ActionLayoutProps) {
  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        {children}
      </View>
      <Button font='semiBold18' label={label} onPress={onNext} isValid={isValid} />
    </View>
  )
}