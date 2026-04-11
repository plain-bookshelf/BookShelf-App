import * as S from "./style";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NotificationStackParamList } from "@/navigation/type";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import { Image } from "react-native";
import Notification from "./components/notification/Notification";

type NotificationListNav = NativeStackNavigationProp<NotificationStackParamList, "Notifications">;

export default function NotificationsScreen() {
  const navigation = useNavigation<NotificationListNav>();

  const MOCK_NOTIFICATIONS = [
    { id: 1, title: "알림", content: "알림", isRead: false },
    { id: 2, title: "알림", content: "알림", isRead: false },
    { id: 3, title: "알림", content: "알림", isRead: false },
    { id: 4, title: "알림", content: "알림", isRead: true },
    { id: 5, title: "알림", content: "알림", isRead: true },
    { id: 6, title: "알림", content: "알림", isRead: true },
    { id: 7, title: "알림", content: "알림", isRead: true },
    { id: 8, title: "알림", content: "알림", isRead: true },
    { id: 9, title: "알림", content: "알림", isRead: true },
    { id: 10, title: "알림", content: "알림", isRead: true },
  ];
  
  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.Content>
          {MOCK_NOTIFICATIONS.map((notification) => (
            <Notification
              key={notification.id}
              title={notification.title}
              content={notification.content}
              isRead={notification.isRead}
              onPress={() => navigation.navigate("NotificationDetail", { notificationId: notification.id })}
            />
          ))}
        </S.Content>
      </S.Container>
    </>
  )
}