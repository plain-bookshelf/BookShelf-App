import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationStackParamList } from "../type";
import NotificationsScreen from "@/screens/main/notifications/NotificationsScreen";
import NotificationDetailScreen from "@/screens/main/notificationDetail/NotificationDetailScreen";

const Stack = createNativeStackNavigator<NotificationStackParamList>();

export default function NotificationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} />
    </Stack.Navigator>
  );
}
