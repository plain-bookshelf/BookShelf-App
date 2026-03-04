import * as S from "./style"
import { useWindowDimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function BookBar() {
	const { width } = useWindowDimensions();

  return(
    <Shadow
      distance={10}
      startColor="rgba(0,0,0,0.08)"
      offset={[0, 0]}
    >
      <S.BookBar width={width} />
    </Shadow>
  )
}