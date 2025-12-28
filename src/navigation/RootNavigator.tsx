import Typography from "@/components/common/typography/Typography";
import AuthInput from "@/components/auth/authInput/AuthInput";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { View } from "react-native";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import IdStep from "@/screens/signup/steps/IdStep";
import SignupHeader from "@/screens/signup/SignupHeader";
import ContentLayout from "@/screens/signup/ContentLayout";
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
  const [name, setName] = useState("");

  return(
    <>
    <KeyboardDismiss>
      <Signup />
    </KeyboardDismiss>
    </>
  )
}