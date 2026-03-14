import { MainStackParamList, MainTabParamList } from "../type";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "../tabs/BottomTab";
import MainHeader from "@/components/layout/mainLayout/MainHeader";
import HomeScreen from "@/screens/main/home/HomeScreen";
import SearchStack from "@/navigation/stacks/SearchStack";
import AITopTabs from "@/navigation/tabs/AITopTabs";
import RankingScreen from "@/screens/main/rank/RankingScreen";
import ProfileStack from "@/navigation/stacks/ProfileStack";

const RootStack = createNativeStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  const header = () => <MainHeader />;

  return (
    <Tab.Navigator
      tabBar={BottomBar as any}
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
      <Tab.Screen name="AI" component={AITopTabs} options={{ header }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ header }} />
      <Tab.Screen name="Ranking" component={RankingScreen} options={{ header }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ header }} />
    </Tab.Navigator>
  );
}

/* 메인 bottom tab에 존재하지 않는 notification을 관리하기 위한 상위 Stack */
export default function MainStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={MainTabs} />
      <RootStack.Screen name="Notification" component={MainTabs} />
    </RootStack.Navigator>
  );
}