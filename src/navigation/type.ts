import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";

export type AuthStackParamList = {
  AuthHome: undefined;
  SignupRoleSelect: undefined;
  UserSignup: undefined;
  AdminSignup: undefined;
  FindPassword: undefined;
  FindId: undefined;
  Onboarding: undefined;
};

export type SearchStackParamList = {
  SearchMain: undefined;
};

export type AIStackParamList = {
  BookRecommendation: undefined;
  Chatbot: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: undefined;
  MyBooksDetail: { initialTab?: "reserved" | "rental" | "overdue" };
};

export type MainTabParamList = {
  Search: NavigatorScreenParams<SearchStackParamList>;
  AI: NavigatorScreenParams<AIStackParamList>;
  Home: undefined;
  Ranking: undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

/* Search와는 별개로 bottom tab에는 notification이 존재하지 않기 때문에
   상위 Stack에서 관리하도록 변경 */
export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Notification: undefined;
};

export type AuthNav = NativeStackNavigationProp<AuthStackParamList>;
export type MainTabNav = BottomTabNavigationProp<MainTabParamList>;
/** 헤더 등에서 알림으로 갈 때 사용 (메인 스택 네비게이션) */
export type MainNav = CompositeNavigationProp<
  MainTabNav,
  NativeStackNavigationProp<MainStackParamList>
>;
export type ProfileNav = NativeStackNavigationProp<ProfileStackParamList>;
export type SearchNav = NativeStackNavigationProp<SearchStackParamList>;
export type AITopTabNav = import("@react-navigation/material-top-tabs").MaterialTopTabNavigationProp<AIStackParamList>;