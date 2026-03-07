import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

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

export type MainTabParamList = {
  Search: NavigatorScreenParams<SearchStackParamList>;
  AI: NavigatorScreenParams<AIStackParamList>;
  Home: undefined;
  Ranking: undefined;
  Profile: undefined;
  Notification: undefined;
};


export type AuthNav = NativeStackNavigationProp<AuthStackParamList>;
export type MainNav = BottomTabNavigationProp<MainTabParamList>;
export type SearchNav = NativeStackNavigationProp<SearchStackParamList>;
export type AITopTabNav = import("@react-navigation/material-top-tabs").MaterialTopTabNavigationProp<AIStackParamList>;