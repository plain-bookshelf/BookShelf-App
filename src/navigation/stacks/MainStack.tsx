import AuthHomeScreen from "@/screens/auth/authHome/AuthHomeScreen";
import FindPasswordScreen from "@/screens/auth/password/FindPasswordScreen";
import AdminSignupScreen from "@/screens/auth/signup/AdminSignupScreen";
import SignupRoleSelectScreen from "@/screens/auth/signupRoleSelect/SignupRoleSelectScreen";
import { MainTabParamList } from "../type";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from "../tabs/BottomTab";
import MainHeader from "@/components/layout/mainLayout/MainHeader";
import HomeScreen from "@/screens/main/home/HomeScreen";
import SearchStack from "@/navigation/stacks/SearchStack";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainStack() {
  const header = () => <MainHeader />

  return(
    <Tab.Navigator
      tabBar={BottomBar as any}
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
      <Tab.Screen name="AI" component={SignupRoleSelectScreen} options={{ header: header}} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ header: header}} />
      <Tab.Screen name="Ranking" component={AdminSignupScreen} options={{ header: header}} />
      <Tab.Screen name="Profile" component={FindPasswordScreen} options={{ header: header}} />
    </Tab.Navigator>
  )
}