import Button from "@/components/common/button/Button"
import { Children, ReactNode } from "react"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface ActionLayoutProps {
  children: React.ReactNode;
  label: string;
  onNext: () => void;
  isValid: any;
  step: number
}

export default function ActionLayout({ children, label, onNext, isValid, step }: ActionLayoutProps) {
  const isStep = step < 1.5 ? Math.ceil(step) - 1 : Math.ceil(step)
  const nowValid = isValid[isStep]

  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        {children}
      </View>
      <Button font='semiBold18' label={label} onPress={onNext} isValid={nowValid} />
    </View>
  )
}