import { Image, Pressable, View } from "react-native";
import btn_previous_default from "@/assets/btn_previous_default.png"
import Typography from "@/components/common/typography/Typography";

interface SignupHeaderProps {
  step: number,
  onPrev: () => void,
}

/**
 * Renders the signup header with a back button and an optional step indicator.
 *
 * @param step - Current signup progress; displayed as `Math.floor(step)/3`. The indicator is omitted when `step` equals 4.
 * @param onPrev - Callback invoked when the back button is pressed.
 * @returns A React element containing a back button and, unless `step` is 4, a step indicator formatted as `N/3`.
 */
export default function SignupHeader({ step, onPrev }: SignupHeaderProps) {
  const nowStep = Math.floor(step);
  
  return(
    <View style={{ width: '100%', flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 40, marginBottom: 16 }}>
      <Pressable onPress={onPrev}>
        <Image source={btn_previous_default} style={{ width: 10, height: 17}} />
      </Pressable>
      {step !== 4 && <Typography children={`${nowStep}/3`} font='medium16' color='defaultBlack' />}
    </View>
  )
}