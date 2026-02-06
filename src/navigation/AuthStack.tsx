import AuthHomeScreen from "@/screens/auth/AuthHomeScreen";
import FindIdScreen from "@/screens/auth/Id/FindIdScreen";
import FindPasswordScreen from "@/screens/auth/password/FindPasswordScreen";
import AdminSignupScreen from "@/screens/auth/signup/AdminSignupScreen";
import UserSignupScreen from "@/screens/auth/signup/UserSignupScreen";
import SignupRoleSelectScreen from "@/screens/auth/SignupRoleSelectScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./type";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      <Stack.Screen name="SignupRoleSelect" component={SignupRoleSelectScreen} />
      <Stack.Screen name="UserSignup" component={UserSignupScreen} />
      <Stack.Screen name="AdminSignup" component={AdminSignupScreen} />
      <Stack.Screen name="FindPassword" component={FindPasswordScreen} />
      <Stack.Screen name="FindId" component={FindIdScreen} />
    </Stack.Navigator>
  )
}