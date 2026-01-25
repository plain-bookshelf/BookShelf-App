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

/**
 * Render a layout that places children in a flexible content area above a bottom action button and enables that button based on the current step's validity.
 *
 * @param children - Content to render in the main flexible area
 * @param label - Text to display on the action button
 * @param onNext - Callback invoked when the action button is pressed
 * @param isValid - Indexed collection (e.g., array or object) of boolean validity flags for steps; the button is enabled according to the value for the current step
 * @param step - Current step index used to select which validity flag from `isValid` applies
 * @returns The rendered React element for the action layout
 */
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