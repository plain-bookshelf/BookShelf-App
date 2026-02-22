import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../stacks/AuthStack";
import MainStack from "../stacks/MainStack";

const Stack = createNativeStackNavigator();

/** AuthStack과 MainStack 구별용 NativeStack */
export default function RootNavigator() {
  /* TODO: 나중에 상태 바꿔야 함 */
  const isLoggedIn = true;

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