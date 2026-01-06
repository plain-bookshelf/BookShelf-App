import Typography from "@/components/common/typography/Typography"
import AuthInput from "@/components/auth/authInput/AuthInput"
import { useEffect, useState } from "react"

interface PasswordStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function PasswordStep({ value, onChange, setIsStepValid }: PasswordStepProps) {
  const [checkPassword, setCheckPassword] = useState(value);

  useEffect(() => {
    if(value === checkPassword){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [ ,value, checkPassword])

  return(
    <>
      <Typography children='비밀번호를 생성하세요.' font='semiBold24' color='defaultBlack' />
      <AuthInput label='' placeholder='비밀번호를 입력해주세요.' isError={false} warningMessage="" value={value} onChangeText={onChange} />
      <AuthInput label='' placeholder='비밀번호 확인' isError={value.length > 0 && value !== checkPassword} warningMessage="비밀번호가 일치하지 않습니다." value={checkPassword} onChangeText={setCheckPassword} />
    </>
  )
}