import * as S from "./style";
import { Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NotificationStackParamList } from "@/navigation/type";
import { Pressable } from "react-native";
import { Image } from "react-native";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import Typography from "@/components/common/typography/Typography";
import img_test_book_default from "@/assets/img_test-book_default.png";

type NotificationDetailNav = NativeStackNavigationProp<NotificationStackParamList, "NotificationDetail">;
type NotificationDetailRoute = RouteProp<NotificationStackParamList, "NotificationDetail">;

export default function NotificationDetailScreen() {
  const navigation = useNavigation<NotificationDetailNav>();
  const { notificationId } = useRoute<NotificationDetailRoute>().params;

  const MOCK_NOTIFICATION = {
    id: 1,
    title: "책 대여 안내",
    content: "대여하신 책 “오늘도 소심한 고양이”이/가 반납 3일 남으셨습니다",
    img: img_test_book_default,
  }

  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.TextBox>
          <Typography font='tjMedium20' color='defaultBlack' children={MOCK_NOTIFICATION.title} />
          <Typography font='tjMedium16' color='notificationContentGray' children={MOCK_NOTIFICATION.content} />
        </S.TextBox>
        <S.ImageBox>
          <Image source={MOCK_NOTIFICATION.img} style={{ width: 180, height: 260 }} />
        </S.ImageBox>
      </S.Container>
    </>
  );
}
