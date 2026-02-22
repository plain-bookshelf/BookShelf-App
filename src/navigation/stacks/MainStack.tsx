import AuthHomeScreen from "@/screens/auth/authHome/AuthHomeScreen";
import FindPasswordScreen from "@/screens/auth/password/FindPasswordScreen";
import AdminSignupScreen from "@/screens/auth/signup/AdminSignupScreen";
import SignupRoleSelectScreen from "@/screens/auth/signupRoleSelect/SignupRoleSelectScreen";
import { MainTabParamList } from "../type";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from "../tabs/BottomTab";
import MainHeader from "@/components/layout/mainLayout/MainHeader";
import HomeScreen from "@/screens/main/home/HomeScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainStack() {
  const a = () => <MainHeader />

  return(
    <Tab.Navigator
      tabBar={BottomBar as any}
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen name="Search" component={AuthHomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="AI" component={SignupRoleSelectScreen} options={{ header: a}} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ header: a}} />
      <Tab.Screen name="Ranking" component={AdminSignupScreen} options={{ header: a}} />
      <Tab.Screen name="Profile" component={FindPasswordScreen} options={{ header: a}} />
    </Tab.Navigator>
  )
}