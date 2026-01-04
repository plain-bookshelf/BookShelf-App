import { createNativeStackNavigator } from "@react-navigation/native-stack";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import Signup from "@/screens/signup/SignupScreen";

const Stack = createNativeStackNavigator();

/** AuthStack과 MainStack 구별용 NativeStack */
export default function RootNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={temp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

function temp() {

  return(
    <>
    <KeyboardDismiss>
      <Signup />
    </KeyboardDismiss>
    </>
  )
}