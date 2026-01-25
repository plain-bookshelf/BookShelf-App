import { Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";

type Props = {
  children: React.ReactNode;
};

/**
 * Wraps provided content in a touchable area that dismisses the on-screen keyboard when pressed.
 *
 * @param children - The React nodes to render inside the touchable wrapper.
 * @returns The wrapped children inside a touchable that calls `Keyboard.dismiss` on press.
 */
export default function KeyboardDismiss({ children }: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}