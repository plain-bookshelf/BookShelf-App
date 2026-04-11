import { Shadow } from "react-native-shadow-2";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import { Pressable } from "react-native";

interface NotificationProps {
  title: string;
  content: string;
  isRead: boolean;
  onPress: () => void;
}

export default function Notification({ title, content, isRead, onPress }: NotificationProps) {
  return (
    <Pressable onPress={onPress}>
      <Shadow
        stretch
        distance={5}
        startColor="rgba(0,0,0,0.25)"
        endColor="rgba(0,0,0,0.02)"
        offset={[0, 4]}
        paintInside={false}
        style={{ borderRadius: 8 }}
        containerStyle={{
          width: "100%",
          opacity: isRead ? 0.5 : 1,
        }}
      >
        <S.Surface>
          <Typography font="medium16" color="defaultBlack" children={title} />
          <Typography font="medium12" color="defaultGray" children={content} />
        </S.Surface>
      </Shadow>
    </Pressable>
  );
}
