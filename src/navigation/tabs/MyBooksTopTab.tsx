import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MyBooksStackParamList, ProfileNav, ProfileStackParamList } from "../type";
import { colorStyle } from "@/styles/colorStyle";
import BorrowedScreen from "@/screens/main/MyBooks/borrowed/BorrowedScreen";
import OverdueScreen from "@/screens/main/MyBooks/overdue/OverdueScreen";
import ReservedScreen from "@/screens/main/MyBooks/reserved/ReservedScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Image } from "react-native";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

const TopTab = createMaterialTopTabNavigator<MyBooksStackParamList>();

type Props = NativeStackScreenProps<ProfileStackParamList, "MyBooks">;

export default function MyBooksTopTabs({ route }: Props) {
  const initialTab = route.params?.initialTab ?? "Borrowed";
  const navigation = useNavigation<ProfileNav>();

  return (
    <>
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </Header>
      <TopTab.Navigator
        key={initialTab}
        initialRouteName={initialTab}
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
          name="Borrowed"
          component={BorrowedScreen}
          options={{ title: "대여" }}
        />
        <TopTab.Screen
          name="Reserved"
          component={ReservedScreen}
          options={{ title: "예약" }}
        />
        <TopTab.Screen
          name="Overdue"
          component={OverdueScreen}
          options={{ title: "연체" }}
        />
      </TopTab.Navigator>
    </>
  );
}

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 22px 24px 10px;
  background-color: ${colorStyle.defaultWhite};
`