import Typography from "@/components/common/typography/Typography"
import { useEffect, useState } from "react"
import ContentLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ContentLayout";
import DefaultInput from "@/components/auth/authInput/DefaultInput";
import { isValidEmail } from "@/utils/isValidEmail";

interface AdminCodeStepStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function EmailStep({ value, onChange, setIsStepValid }: AdminCodeStepStepProps) {
  const [isEmail, setIsEmail] = useState(false);

  useEffect(() => {
    setIsEmail(isValidEmail(value))
    setIsStepValid(isEmail)
  }, [value])
  
  return(
    <ContentLayout>
      <Typography children='비밀번호 찾기' font='medium28' color='defaultBlack' />
      <DefaultInput label='비밀번호를 잃어버리셨나요?' placeholder='이메일 입력' isError={value.length > 0 && !isEmail} warningMessage="올바르지 않은 이메일 형식입니다." value={value} onChangeText={onChange} />
    </ContentLayout>
  )
}