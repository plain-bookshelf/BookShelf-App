import Typography from "@/components/common/typography/Typography"
import { useEffect, useState } from "react"
import ContentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout";
import DefaultInput from "@/components/common/input/DefaultInput";
import { isValidEmail } from "@/utils/isValidEmail";

interface EmailStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function EmailStep({ value, onChange, setIsStepValid }: EmailStepProps) {
  const [isEmail, setIsEmail] = useState(false);

  useEffect(() => {
    const isValid = isValidEmail(value)
    setIsEmail(isValid)
    setIsStepValid(isValid)
  }, [value])
  
  return(
    <ContentLayout>
      <Typography children='비밀번호 찾기' font='medium28' color='defaultBlack' />
      <DefaultInput label='비밀번호를 잃어버리셨나요?' placeholder='이메일 입력' isError={value.length > 0 && !isEmail} warningMessage="올바르지 않은 이메일 형식입니다." value={value} onChangeText={onChange} />
    </ContentLayout>
  )
}