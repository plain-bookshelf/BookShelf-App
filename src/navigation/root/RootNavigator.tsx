import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../stacks/AuthStack";
import MainStack from "../stacks/MainStack";
import useAuthStore from "@/store/useAuthStore";

const Stack = createNativeStackNavigator();

/** AuthStack과 MainStack 구별용 NativeStack */
export default function RootNavigator() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const isLoggedIn = !!accessToken;

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={MainStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}