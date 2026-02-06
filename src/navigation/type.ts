import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  AuthHome: undefined;
  SignupRoleSelect: undefined;
  UserSignup: undefined;
  AdminSignup: undefined;
  FindPassword: undefined;
  FindId: undefined;
};

export type AuthNav = NativeStackNavigationProp<AuthStackParamList>;