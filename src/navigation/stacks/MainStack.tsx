import { MainStackParamList, MainTabParamList } from "../type";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "../tabs/BottomTab";
import MainHeader from "@/components/layout/mainLayout/MainHeader";
import HomeScreen from "@/screens/main/home/HomeScreen";
import SearchStack from "@/navigation/stacks/SearchStack";
import AITopTabs from "@/navigation/tabs/AITopTab";
import RankingScreen from "@/screens/main/rank/RankingScreen";
import ProfileStack from "@/navigation/stacks/ProfileStack";
import BookStack from "@/navigation/stacks/BookStack";
import NotificationStack from "@/navigation/stacks/NotificationStack";
import AdminHomeScreen from "@/screens/admin/rental/AdminHomeScreen";
import useUserStore from "@/store/useUserStore";
import { isAdminAuthority } from "@/utils/isAdminAuthority";

const RootStack = createNativeStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  const header = () => <MainHeader />;
  const authority = useUserStore((s) => s.user?.authority);
  const isAdmin = isAdminAuthority(authority);

  return (
    <Tab.Navigator
      tabBar={BottomBar as any}
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
      <Tab.Screen name="AI" component={AITopTabs} options={{ header }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ header }} />
      {isAdmin && <Tab.Screen name="AdminHome" component={AdminHomeScreen} options={{ header }} />}
      <Tab.Screen name="Ranking" component={RankingScreen} options={{ header }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ header }} />
    </Tab.Navigator>
  );
}

/* 탭 밖 플로우는 nested stack으로 묶음 (알림 · 도서) */
export default function MainStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={MainTabs} />
      <RootStack.Screen name="Notification" component={NotificationStack} />
      <RootStack.Screen name="Book" component={BookStack} />
    </RootStack.Navigator>
  );
}