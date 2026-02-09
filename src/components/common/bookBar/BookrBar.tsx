import { useWindowDimensions } from "react-native";
import * as S from "./style"
import { colorStyle } from "@/styles/colorStyle";

export default function BookBar() {
  const { width } = useWindowDimensions();

  const shadowStyle = {
    shadowColor: `${colorStyle.defaultBlack}`,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 2,
  };
  
  return(
    <S.Bar style={shadowStyle} width={width} />
  )
}