import * as S from "./style";
import { Image, Pressable } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NotificationStackParamList } from "@/navigation/type";

type NotificationDetailNav = NativeStackNavigationProp<NotificationStackParamList, "NotificationDetail">;
type NotificationDetailRoute = RouteProp<NotificationStackParamList, "NotificationDetail">;

export default function NotificationDetailScreen() {
  const navigation = useNavigation<NotificationDetailNav>();
  const { notificationId } = useRoute<NotificationDetailRoute>().params;

  return (
    <>
      <Text>das</Text>
    </>
  );
}
