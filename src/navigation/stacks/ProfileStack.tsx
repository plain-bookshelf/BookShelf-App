import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../type";
import ProfileScreen from "@/screens/main/profile/ProfileScreen";
import EditProfileScreen from "@/screens/main/EditProfile/EditProfileScreen";
import MyBooksTopTabs from "../tabs/MyBooksTopTab";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="MyBooks" component={MyBooksTopTabs} />
    </Stack.Navigator>
  );
}
