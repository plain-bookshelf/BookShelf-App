import { createNativeStackNavigator } from "@react-navigation/native-stack";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import T from "@/screens/auth/SignupRoleSelectScreen";

const Stack = createNativeStackNavigator();

/** AuthStack과 MainStack 구별용 NativeStack */
export default function RootNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Temp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

function Temp() {

  return(
    <>
    <KeyboardDismiss>
      <T />
    </KeyboardDismiss>
    </>
  )
}