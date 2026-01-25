import { Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function KeyboardDismiss({ children }: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}