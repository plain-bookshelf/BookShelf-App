import Button from "@/components/common/button/Button"
import { View } from "react-native"

interface ActionLayoutProps {
  children: React.ReactNode;
  label: string;
  onNext: () => void;
  isValid: boolean[];
  step: number;
  isLayout?: boolean;
}

export default function ActionLayout({ children, label, onNext, isValid, step, isLayout = true }: ActionLayoutProps) {
  const isStepValid = isValid[step - 1];

  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        {children}
      </View>
      {isLayout ? 
        <Button font='semiBold18' label={label} onPress={onNext} isValid={isStepValid} /> :
        <View style={{ paddingBottom: 52, paddingHorizontal: 24 }}>
          <Button font='semiBold18' label={label} onPress={onNext} isValid={isStepValid} />
        </View>  
      }
    </View>
  )
}