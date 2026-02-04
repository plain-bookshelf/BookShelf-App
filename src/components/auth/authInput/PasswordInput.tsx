import styled from "styled-components/native"
import Typography from "@/components/common/typography/Typography"
import * as S from "./style"
import { Image, Pressable } from "react-native"
import icon_input_error from "@/assets/icon_input_error.png"
import { useState } from "react"
import btn_passwordShow_false from "@/assets/btn_password-show_false.png"
import btn_passwordShow_true from "@/assets/btn_password-show_true.png"

interface AuthInputProps {
  label: string,
  placeholder: string,
  isError: boolean,
  warningMessage: string,
  value: string,
  onChangeText: (text: string) => void,
}

/**
 * @param label input label 입력
 * @param placeholder input placeholder 입력
 * @param size input wdith 결정 small, large 중 선택
 * @param isError 현재 warningMessage 띄울지 여부
 * @param warningMessage 띄울 경고 메세지
 * @param value input 현재 value
 * @param onChangeText input 현재 value 변경
 * @returns label과 input을 담은 하나의 요소로 반환
 */
export default function PasswordInput({ label, placeholder, isError, warningMessage, value, onChangeText }: AuthInputProps) {
 const [isFocused, setIsFocused] = useState(false);
 const [passwordIsShow, setPasswordIsShow] = useState(false);
 const passwordImage = passwordIsShow ? btn_passwordShow_true : btn_passwordShow_false;

  return(
    <S.InputBox>
      {label.length !== 0 && <Typography children={label} font='regular18' color='labelGray' />}
      <PasswordBox>
        <S.Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          isError={isError} value={value}
          isFocused={isFocused}
          onChangeText={onChangeText}
          secureTextEntry={passwordIsShow}
        />
        <ShowButton onPress={() => setPasswordIsShow(pre => !pre)}>
          <Image source={passwordImage} style={{ width: 20, height: 20 }} />
        </ShowButton>
      </PasswordBox>
      {isError && !isFocused &&
        <S.ErrorContainer>
          <Image source={icon_input_error} style={{width: 17, height: 17}} />
          <Typography children={warningMessage} font='regular16' color='defaultRed' />
        </S.ErrorContainer>
      }
    </S.InputBox>
  )
}

const PasswordBox = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
`

const ShowButton = styled.Pressable`
  left: -40px;
`