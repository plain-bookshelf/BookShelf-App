import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";

/* 로그인 전 이용될 Stack */
export type AuthStackParamList = {
  AuthHome: undefined;
  SignupRoleSelect: undefined;
  UserSignup: undefined;
  AdminSignup: undefined;
  FindPassword: undefined;
  FindId: undefined;
  Onboarding: undefined;
};

/* MainStack에서 bottom Tab에 존재하지 않는 Screen이라서 별도 Stack으로 분리 */
export type SearchStackParamList = {
  SearchMain: undefined;
};

/* AI Screen에서 Top Tab으로 구분 */
export type AIStackParamList = {
  BookRecommendation: undefined;
  Chatbot: undefined;
};

/* MyBooks Screen에서 Top Tab으로 구분 */
export type MyBooksStackParamList = {
  Borrowed: undefined;
  Reserved: undefined;
  Overdue: undefined;
};

/* Profile Screen에서 Stack으로 구분 */
export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: undefined;
  MyBooks: { initialTab?: "Borrowed" | "Reserved" | "Overdue" };
};

/* bottom Tab에 존재하는 Screen이라서 별도 Stack으로 분리하지 않음 */
export type MainTabParamList = {
  Search: NavigatorScreenParams<SearchStackParamList>;
  AI: NavigatorScreenParams<AIStackParamList>;
  Home: undefined;
  Ranking: undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

/* Search와는 별개로 bottom tab에는 notification이 존재하지 않기 때문에 상위 Stack에서 관리하도록 변경 */
export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Notification: undefined;
};

export type AuthNav = NativeStackNavigationProp<AuthStackParamList>;
export type MainTabNav = BottomTabNavigationProp<MainTabParamList>;

/* 헤더 등에서 알림으로 갈 때 사용 (메인 스택 네비게이션) */
export type MainNav = CompositeNavigationProp<
  MainTabNav,
  NativeStackNavigationProp<MainStackParamList>
>;
export type ProfileNav = NativeStackNavigationProp<ProfileStackParamList>;
export type SearchNav = NativeStackNavigationProp<SearchStackParamList>;
export type AITopTabNav = MaterialTopTabNavigationProp<AIStackParamList>;