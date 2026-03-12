import Typography from "@/components/common/typography/Typography";
import * as S from "./style";
import { Image } from "react-native";
import img_AI_profile_default from "@/assets/img_AI-profile_default.png";

interface ChatCardProps {
  text: string;
  who: "user" | "ai";
}

export default function ChatCard({ text, who }: ChatCardProps) {
  return (
    <S.Container who={who}>
      {who === "ai" && (
        <Image source={img_AI_profile_default} style={{ width: 32, height: 32 }} />
      )}
      <S.TextBox who={who}>
        <Typography font="semiBold16" color={who === "user" ? "defaultWhite" : "defaultBlack"} children={text} />
      </S.TextBox>
    </S.Container>
  );
}