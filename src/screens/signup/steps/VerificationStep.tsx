import styled from 'styled-components/native';
import AuthInput from "@/components/auth/authInput/AuthInput"
import Typography from "@/components/common/typography/Typography"
import { useEffect } from "react";
import ContentLayout from '../ContentLayout';
import { Text } from 'react-native';

interface VerificationStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

/**
 * Render the verification code input step used during signup.
 *
 * @param value - Current verification code input value
 * @param onChange - Called with the new input text when the user changes the value
 * @param setIsStepValid - Called with `true` when `value.trim().length > 0`, otherwise called with `false`
 * @returns A React element containing the verification input, countdown timer, and resend controls
 */
export default function VerificationStep({ value, onChange, setIsStepValid }: VerificationStepProps) {

  useEffect(() => {
    if(value.trim().length !== 0){
      setIsStepValid(true)
    }
    else{
      setIsStepValid(false)
    }
  }, [value])
  
  return(
    <Continaer>
      <ContentLayout>
        <Typography children='인증번호 입력' font='medium28' color='defaultBlack' />
        <AuthInputContainer>
          <AuthInput label='회원가입하고 책마루에 가입하세요!' placeholder='인증번호를 입력해주세요.' isError={false} warningMessage="올바르지 않은 인증번호입니다." value={value} onChangeText={onChange} />
          <Timer>
            <Typography children='5:00' font='regular14' color='timerRed' />
          </Timer>
        </AuthInputContainer>
      </ContentLayout>

      <TextBox>
        <Typography children='인증번호가 오지 않았다면' font='regular14' color='resendText' />
        <Typography children='재전송' font='regular14' color='resend' />
      </TextBox>
    </Continaer>
  )
}

const Continaer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 12px;
`

const TextBox = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`

const AuthInputContainer = styled.View`
  width: 100%;
  position: relative;
`

const Timer = styled.View`
  position: absolute;
  justify-self: flex-end;
  justify-content: center;
  height: 48px;
  right: 20px;
  top: 40px;
`