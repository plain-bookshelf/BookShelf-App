import * as S from "./style";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NotificationStackParamList } from "@/navigation/type";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import { Image } from "react-native";
import Notification from "./components/notification/Notification";
import Typography from "@/components/common/typography/Typography";
import { useNotifications } from "@/hooks";
import type { NotificationItem } from "@/types";

type NotificationListNav = NativeStackNavigationProp<NotificationStackParamList, "Notifications">;

const getNotificationContent = (notification: NotificationItem) => {
  const { payload, url } = notification.notification_info;
  const content = [payload.title, payload.return_date && `반납일: ${payload.return_date}`]
    .filter(Boolean)
    .join(" · ");

  return content || url;
};

export default function NotificationsScreen() {
  const navigation = useNavigation<NotificationListNav>();
  const { notifications, isLoading, isError } = useNotifications();
  
  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.Content>
          {isLoading && (
            <Typography font="medium16" color="defaultGray" children="알림을 불러오는 중입니다." />
          )}

          {isError && (
            <Typography font="medium16" color="defaultGray" children="알림을 불러오지 못했습니다." />
          )}

          {!isLoading && !isError && notifications.length === 0 && (
            <Typography font="medium16" color="defaultGray" children="알림이 없습니다." />
          )}

          {notifications.map((notification) => {
            const title = notification.notification_info.name;
            const content = getNotificationContent(notification);

            return (
              <Notification
                key={notification.id}
                title={title}
                content={content}
                isRead={notification.is_read}
                onPress={() => navigation.navigate("NotificationDetail", {
                  notificationId: notification.id,
                  title,
                  content,
                })}
              />
            );
          })}
        </S.Content>
      </S.Container>
    </>
  )
}