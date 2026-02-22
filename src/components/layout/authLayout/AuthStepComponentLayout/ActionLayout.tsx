import Button from "@/components/common/button/Button"
import { View } from "react-native"

interface ActionLayoutProps {
  children: React.ReactNode;
  label: string;
  onNext: () => void;
  isValid: any;
  step: number;
  isLayout?: boolean;
}

export default function ActionLayout({ children, label, onNext, isValid, step, isLayout = true }: ActionLayoutProps) {
  const isStep = step < 1.5 ? Math.ceil(step) - 1 : Math.ceil(step);
  const nowValid = isValid[isStep];

  return(
    <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        {children}
      </View>
      {isLayout ? 
        <Button font='semiBold18' label={label} onPress={onNext} isValid={nowValid} /> :
        <View style={{ paddingBottom: 52, paddingHorizontal: 24 }}>
          <Button font='semiBold18' label={label} onPress={onNext} isValid={nowValid} />
        </View>  
      }
    </View>
  )
}