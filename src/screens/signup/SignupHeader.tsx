import { Image, Pressable, View } from "react-native";
import btn_previous_default from "@/assets/btn_previous_default.png"
import Typography from "@/components/common/typography/Typography";

interface SignupHeaderProps {
  step: number,
  onPrev: () => void,
}

export default function SignupHeader({ step, onPrev }: SignupHeaderProps) {
  
  return(
    <View style={{ flexDirection: "row", alignItems: "center", gap: 326, marginBottom: 24 }}>
      <Pressable onPress={onPrev}>
        <Image source={btn_previous_default} style={{ width: 10, height: 17}} />
      </Pressable>
      <Typography children={`${step}/5`} font='regular20' color='appBarGray' />
    </View>
  )
}