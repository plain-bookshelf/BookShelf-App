import Typography from "@/components/common/typography/Typography"
import * as S from "./style"
import { Image, Keyboard, TouchableWithoutFeedback } from "react-native"
import icon_input_error from "@/assets/icon_input_error.png"
import { useState } from "react"

interface AuthInputProps {
  label: string,
  placeholder: string,
  isError: boolean,
  warningMessage: string,
  value: string,
  onChangeText: (text: string) => void,
}

/**
 * Render a labeled text input that tracks focus and shows an error row when applicable.
 *
 * @param label - Text displayed above the input; omitted when empty
 * @param placeholder - Placeholder text shown inside the input
 * @param isError - When `true`, the warning message and error icon are rendered while the input is not focused
 * @param warningMessage - Error message text shown next to the error icon when `isError` is `true` and the input is blurred
 * @param value - Current input value
 * @param onChangeText - Callback invoked with the updated text when the input changes
 * @returns A React element containing the optional label, the input, and a conditional error row (icon + message)
 */
export default function AuthInput({ label, placeholder, isError, warningMessage, value, onChangeText }: AuthInputProps) {
 const [isFocused, setIsFocused] = useState(false);

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <S.InputBox>
      {label.length !== 0 && <Typography children={label} font='regular18' color='labelGray' />}
      <S.Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        isError={isError} value={value}
        isFocused={isFocused}
        onChangeText={onChangeText}
      />
      {isError && !isFocused &&
        <S.ErrorContainer>
          <Image source={icon_input_error} style={{width: 17, height: 17}} />
          <Typography children={warningMessage} font='regular16' color='defaultRed' />
        </S.ErrorContainer>
      }
    </S.InputBox>
    </TouchableWithoutFeedback>
  )
}