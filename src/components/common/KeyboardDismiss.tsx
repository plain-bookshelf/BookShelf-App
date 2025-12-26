import { Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function KeyboardDismiss({ children }: Props) {
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}