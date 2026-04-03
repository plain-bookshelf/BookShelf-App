import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import { Image, ImageSourcePropType } from "react-native";
import { ColorKey } from "@/styles/colorStyle";

interface BookCardProps {
  title: string;
  info: string;
  image: ImageSourcePropType;
  color: ColorKey;
}

export default function BookCard({ title, info, image, color }: BookCardProps) {
  return (
    <S.BookCard>
      <Image source={image} style={{ width: 55, height: 80 }} />
      <S.BookCardTextBox>
        <Typography font="tjMedium16" color="defaultBlack" children={title} />
        <Typography font="regular12" color={color} children={info} />
      </S.BookCardTextBox>
    </S.BookCard>
  );
}