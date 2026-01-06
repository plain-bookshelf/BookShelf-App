import AuthInput from "@/components/auth/authInput/AuthInput";
import Typography from "@/components/common/typography/Typography";
import { useEffect } from "react";

interface EmailStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function EmailStep({ value, onChange, setIsStepValid }: EmailStepProps) {
  /* 우선은 함수 내부에서 쓰고 나중에 더 쓰일 곳이 많아서 utils로 빼도 괜찮을 듯 */
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const emailIsError = !emailRegex.test(value) && value !== '';

  useEffect(() => {
    if(!emailIsError){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value])

  return(
    <>
      <Typography children='이메일을 인증하세요.' font='semiBold24' color='defaultBlack' />
      <AuthInput label='' placeholder='이메일를 입력해주세요.' isError={emailIsError} warningMessage='이메일 형식이 올바르지 않습니다.' value={value} onChangeText={onChange} />
    </>
  )
}