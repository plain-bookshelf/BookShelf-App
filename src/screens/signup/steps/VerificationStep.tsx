import AuthInput from "@/components/auth/authInput/AuthInput"
import Typography from "@/components/common/typography/Typography"
import * as S from "./VerificationStep.styles"
import { useEffect } from "react";

interface VerificationStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function VerificationStep({ value, onChange, setIsStepValid }: VerificationStepProps) {

  useEffect(() => {
    if(value){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value])

  return(
    <>
      <Typography children='인증번호 입력' font='medium28' color='defaultBlack' />
      <S.AuthInputContainer>
        <AuthInput label='회원가입하고 책마루에 가입하세요!' placeholder='인증번호를 입력해주세요.' isError={false} warningMessage="올바르지 않은 인증번호입니다." value={value} onChangeText={onChange} />
        <S.Timer>
          <Typography children='5:00' font='regular14' color='timerRed' />
        </S.Timer>
      </S.AuthInputContainer>
    </>
  )
}