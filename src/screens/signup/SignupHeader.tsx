import { Image, Pressable, View } from "react-native";
import btn_previous_default from "@/assets/btn_previous_default.png"
import Typography from "@/components/common/typography/Typography";

interface SignupHeaderProps {
  step: number,
  onPrev: () => void,
}

export default function SignupHeader({ step, onPrev }: SignupHeaderProps) {
  const nowStep = Math.floor(step);
  
  return(
    <View style={{ width: '100%', flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 40, marginBottom: 16 }}>
      <Pressable onPress={onPrev}>
        <Image source={btn_previous_default} style={{ width: 10, height: 17}} />
      </Pressable>
      <Typography children={`${nowStep}/5`} font='medium16' color='defaultBlack' />
    </View>
  )
}