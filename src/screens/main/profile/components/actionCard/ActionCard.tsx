import Typography from "@/components/common/typography/Typography";
import * as S from "./style"
import { Image, ImageSourcePropType } from "react-native";
import { ColorKey } from "@/styles/colorStyle";

interface ActionCardProps {
  title: string;
  color: ColorKey;
  icon: ImageSourcePropType;
  onPress: () => void;
}

export default function ActionCard({ title, color, icon, onPress }: ActionCardProps) {
  return(
    <S.Container onPress={onPress}>
      <Image source={icon} style={{ width: 20, height: 20 }} />
      <Typography font='medium16' color={color} children={title} />
    </S.Container>
  )
}