import styled from '@emotion/native';
import DefaultInput from "@/components/common/input/DefaultInput"
import Typography from "@/components/common/typography/Typography"
import { useEffect } from "react";
import ContentLayout from '@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout';
import { useEmailTimer } from '@/hooks/useEmailTimer';
import { useEmailSend } from '@/hooks/useEmailSend';

interface VerificationStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
  email: string;
}

export default function VerificationStep({ value, onChange, setIsStepValid, email }: VerificationStepProps) {
  const { timeText, start, clear } = useEmailTimer("verification", email);
  const { mutateAsync: emailSend } = useEmailSend();
  const handleResend = async () => {
    await clear();
    try {
      await emailSend({ params: { email: email }, codeType: "VERIFICATION_EMAIL" });
      await start();
    } catch (error) {
      console.error("이메일 전송 실패", error);
      return;
    }

  }

  useEffect(() => {
    if(value.trim().length !== 0){
      setIsStepValid(true)
    }
    else{
      setIsStepValid(false)
    }
  }, [value])

  useEffect(() => {
    (async () => {
      await clear();
      await start();
    })();

    return () => {
      (async () => {
        await clear();
      })();
    }
  }, [])

  return(
    <Continaer>
      <ContentLayout>
        <Typography children='인증번호 입력' font='medium28' color='defaultBlack' />
        <AuthInputContainer>
          <DefaultInput label='회원가입하고 책마루에 가입하세요!' placeholder='인증번호를 입력해주세요.' isError={false} warningMessage="올바르지 않은 인증번호입니다." value={value} onChangeText={onChange} />
          <Timer>
            <Typography children={timeText} font='regular14' color='timerRed' />
          </Timer>
        </AuthInputContainer>
      </ContentLayout>

      <TextBox onPress={handleResend}>
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

const TextBox = styled.Pressable`
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