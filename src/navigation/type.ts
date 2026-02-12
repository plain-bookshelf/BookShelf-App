import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  AuthHome: undefined;
  SignupRoleSelect: undefined;
  UserSignup: undefined;
  AdminSignup: undefined;
  FindPassword: undefined;
  FindId: undefined;
  Onboarding: undefined;
};

export type MainTabParamList = {
  Search: undefined;
  AI: undefined;
  Home: undefined;
  Ranking: undefined;
  Profile: undefined;
};


export type AuthNav = NativeStackNavigationProp<AuthStackParamList>;
export type MainNav = BottomTabNavigationProp<MainTabParamList>;