import Button from "@/components/button/Button";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/** AuthStack과 MainStack 구별용 NativeStack */
export default function RootNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={temp}
      />
    </Stack.Navigator>
  )
}

function temp() {
  return(
    <></>
  )
}