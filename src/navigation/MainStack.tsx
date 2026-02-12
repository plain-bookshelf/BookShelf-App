import AuthHomeScreen from "@/screens/auth/AuthHomeScreen";
import FindIdScreen from "@/screens/auth/id/FindIdScreen";
import FindPasswordScreen from "@/screens/auth/password/FindPasswordScreen";
import AdminSignupScreen from "@/screens/auth/signup/AdminSignupScreen";
import UserSignupScreen from "@/screens/auth/signup/UserSignupScreen";
import SignupRoleSelectScreen from "@/screens/auth/SignupRoleSelectScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabParamList } from "./type";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from "./BottomTab";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainStack() {
  return(
    <Tab.Navigator
      tabBar={BottomBar as any}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Search" component={AuthHomeScreen} />
      <Tab.Screen name="AI" component={SignupRoleSelectScreen} />
      <Tab.Screen name="Home" component={UserSignupScreen} />
      <Tab.Screen name="Ranking" component={AdminSignupScreen} />
      <Tab.Screen name="Profile" component={FindPasswordScreen} />
    </Tab.Navigator>
  )
}