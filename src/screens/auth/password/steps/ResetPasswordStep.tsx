import Typography from "@/components/common/typography/Typography"
import { useEffect, useState } from "react"
import ContentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout";
import PasswordInput from "@/components/common/input/PasswordInput";

interface ResetPasswordStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function ResetPasswordStep({ value, onChange, setIsStepValid }: ResetPasswordStepProps) {
  const [checkPassword, setCheckPassword] = useState(value);

  useEffect(() => {
    if(value === checkPassword && value.trim().length !== 0){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value, checkPassword]);
  
  return(
    <ContentLayout>
      <Typography children='비밀번호 찾기' font='medium28' color='defaultBlack' />
      <PasswordInput label='비밀번호를 잃어버리셨나요?' placeholder='새 비밀번호 입력' isError={false} warningMessage="" value={value} onChangeText={onChange} />
      <PasswordInput label='' placeholder='비밀번호 재입력' isError={value.length > 0 && value !== checkPassword} warningMessage="비밀번호가 일치하지 않습니다." value={checkPassword} onChangeText={setCheckPassword} />
    </ContentLayout>
  )
}