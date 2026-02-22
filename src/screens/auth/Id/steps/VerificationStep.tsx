import styled from '@emotion/native';
import DefaultInput from "@/components/auth/authInput/DefaultInput"
import Typography from "@/components/common/typography/Typography"
import { useEffect, useState } from "react";
import ContentLayout from '@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout';
import { Text } from 'react-native';
import { isValidEmail } from '@/utils/isValidEmail';

interface VerificationStepProps {
  value: string;
  onChange: (text: string) => void;
  email: string;
  onChangeEmail: (text: string) => void
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function VerificationStep({ value, onChange, email, onChangeEmail, setIsStepValid }: VerificationStepProps) {
  const [isEmail, setIsEmail] = useState(true);
  useEffect(() => {
    setIsStepValid(false);
  }, [])

  useEffect(() => {
    if(value.trim().length !== 0 && isEmail){
      setIsStepValid(true);
    }
    else{
      setIsStepValid(false);
    }
  }, [value, isEmail])

  useEffect(() => {
    const isValid = isValidEmail(email);
    setIsEmail(isValid);
  }, [email])
  
  return(
    <Continaer>
      <ContentLayout>
        <Typography children='아이디 찾기' font='medium28' color='defaultBlack' />
        <DefaultInput label='아이디를 잃어버리셨나요?' placeholder='이메일 입력' isError={email.length > 0 && !isEmail} warningMessage='올바르지 않은 이메일입니다.' value={email} onChangeText={onChangeEmail} />
        <AuthInputContainer>
          <DefaultInput label='' placeholder='인증번호를 입력해주세요.' isError={false} warningMessage="올바르지 않은 인증번호입니다." value={value} onChangeText={onChange} />
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
`