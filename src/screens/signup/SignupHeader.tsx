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
      {/* TODO: 최대 step 지정 후 isShowStep 이런 식으로 step 보여주기 여부로 변경 필요함 */}
      {step < 4 && <Typography children={`${nowStep}/3`} font='medium16' color='defaultBlack' />}
    </View>
  )
}