import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookStackParamList } from "../type";
import BookDetailScreen from "@/screens/main/bookDetail/BookDetail";
import BookCommentsScreen from "@/screens/main/bookComments/BookComments";

const Stack = createNativeStackNavigator<BookStackParamList>();

export default function BookStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      <Stack.Screen name="BookComments" component={BookCommentsScreen} />
    </Stack.Navigator>
  );
}
