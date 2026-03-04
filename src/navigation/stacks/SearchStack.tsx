import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "@/screens/main/search/SearchScreen";
import { SearchStackParamList } from "../type";

const Stack = createNativeStackNavigator<SearchStackParamList>();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchMain" component={SearchScreen} />
    </Stack.Navigator>
  );
}

