import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BookRecommendationScreen from "@/screens/main/ai/bookRecommendation/BookRecommendationScreen";
import ChatbotScreen from "@/screens/main/ai/chatbot/ChatbotScreen";
import { AIStackParamList } from "../type";
import { colorStyle } from "@/styles/colorStyle";

const TopTab = createMaterialTopTabNavigator<AIStackParamList>();

export default function AITopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "500" },
        tabBarActiveTintColor: colorStyle.defaultBlack,
        tabBarInactiveTintColor: colorStyle.aiTabInactiveGray,
        tabBarIndicatorStyle: { backgroundColor: colorStyle.defaultGreen },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
      }}
    >
      <TopTab.Screen
        name="BookRecommendation"
        component={BookRecommendationScreen}
        options={{ title: "도서 추천" }}
      />
      <TopTab.Screen
        name="Chatbot"
        component={ChatbotScreen}
        options={{ title: "마루AI" }}
      />
    </TopTab.Navigator>
  );
}
