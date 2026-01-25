import Typography from "@/components/common/typography/Typography"
import AuthInput from "@/components/auth/authInput/AuthInput"
import { useEffect, useState } from "react"
import ContentLayout from "../ContentLayout";

interface PasswordStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function PasswordStep({ value, onChange, setIsStepValid }: PasswordStepProps) {
  const [checkPassword, setCheckPassword] = useState(value);

  useEffect(() => {
    if(value === checkPassword && value.trim().length !== 0){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value, checkPassword])
  
  return(
    <ContentLayout>
      <Typography children='비밀번호 생성' font='medium28' color='defaultBlack' />
      <AuthInput label='회원가입하고 책마루에 가입하세요' placeholder='10자리 ~ 20자리, 영문, 특수문자 포함' isError={false} warningMessage="" value={value} onChangeText={onChange} />
      <AuthInput label='' placeholder='비밀번호 재입력' isError={value.length > 0 && value !== checkPassword} warningMessage="비밀번호가 일치하지 않습니다." value={checkPassword} onChangeText={setCheckPassword} />
    </ContentLayout>
  )
}