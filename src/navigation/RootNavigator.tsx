import { createNativeStackNavigator } from "@react-navigation/native-stack";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import Signup from "@/screens/signup/SignupScreen";

const Stack = createNativeStackNavigator();

/**
 * Native stack used to separate authentication and main app navigation flows.
 *
 * @returns A Stack.Navigator element containing the "Home" screen (rendered by Temp) with the header hidden.
 */
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

/**
 * Renders the signup screen wrapped in a keyboard-dismiss wrapper.
 *
 * @returns A React element that displays `Signup` inside `KeyboardDismiss`.
 */
function Temp() {

  return(
    <>
    <KeyboardDismiss>
      <Signup />
    </KeyboardDismiss>
    </>
  )
}