import * as S from "./style";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NotificationStackParamList } from "@/navigation/type";
import { Pressable } from "react-native";
import { Image } from "react-native";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import Typography from "@/components/common/typography/Typography";

type NotificationDetailNav = NativeStackNavigationProp<NotificationStackParamList, "NotificationDetail">;
type NotificationDetailRoute = RouteProp<NotificationStackParamList, "NotificationDetail">;

export default function NotificationDetailScreen() {
  const navigation = useNavigation<NotificationDetailNav>();
  const { title = "알림", content = "알림 내용을 불러오지 못했습니다." } = useRoute<NotificationDetailRoute>().params;

  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.TextBox>
          <Typography font='tjMedium20' color='defaultBlack' children={title} />
          <Typography font='tjMedium16' color='notificationContentGray' children={content} />
        </S.TextBox>
      </S.Container>
    </>
  );
}
