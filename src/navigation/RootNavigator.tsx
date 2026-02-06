import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

/** AuthStack과 MainStack 구별용 NativeStack */
export default function RootNavigator() {
  return(
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}