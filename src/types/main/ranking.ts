import { ImageSourcePropType } from "react-native";

export interface RankUserProps {
  rank: number;
  profileImage: ImageSourcePropType;
  profileName: string;
  bookPoint: number;
}