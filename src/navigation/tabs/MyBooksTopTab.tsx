import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MyBooksStackParamList } from "../type";
import { colorStyle } from "@/styles/colorStyle";
import BorrowedScreen from "@/screens/main/MyBooks/borrowed/BorrowedScreen";
import OverdueScreen from "@/screens/main/MyBooks/overdue/OverdueScreen";
import ReservedScreen from "@/screens/main/MyBooks/reserved/ReservedScreen";

const TopTab = createMaterialTopTabNavigator<MyBooksStackParamList>();

export default function MyBooksTopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "500" },
        tabBarActiveTintColor: colorStyle.defaultBlack,
        tabBarInactiveTintColor: colorStyle.aiTabInactiveGray,
        tabBarIndicatorStyle: { backgroundColor: colorStyle.defaultGreen },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
      }}
    >
      <TopTab.Screen
        name="Borrowed"
        component={BorrowedScreen}
        options={{ title: "대여" }}
      />
      <TopTab.Screen
        name="Reserved"
        component={ReservedScreen}
        options={{ title: "예약" }}
      />
      <TopTab.Screen
        name="Overdue"
        component={OverdueScreen}
        options={{ title: "연체" }}
      />
    </TopTab.Navigator>
  );
}
