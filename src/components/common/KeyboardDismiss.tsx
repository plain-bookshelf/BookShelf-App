import { Pressable, Keyboard } from "react-native";

type Props = {
  children: React.ReactNode;
};

/**
 * 항상 최상위 컴포넌트에 둘 것
 * @param children screen 단위로 children을 받습니다
 * @returns input을 제외한 다른 공간을 클릭하면 키보드가 사라지는 컴포넌트
 */
export default function KeyboardDismiss({ children }: Props) {
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      {children}
    </Pressable>
  );
}