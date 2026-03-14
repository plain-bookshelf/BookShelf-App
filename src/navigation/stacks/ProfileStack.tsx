import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../type";
import ProfileScreen from "@/screens/main/profile/ProfileScreen";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={ProfileScreen} />
      <Stack.Screen name="MyBooksDetail" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
