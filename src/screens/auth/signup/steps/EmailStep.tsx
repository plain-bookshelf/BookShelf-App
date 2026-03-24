import DefaultInput from "@/components/auth/authInput/DefaultInput";
import Typography from "@/components/common/typography/Typography";
import { useEffect, useState } from "react";
import ContentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout";
import { isValidEmail } from "@/utils/isValidEmail";

interface IdStepProps {
  value: string,
  onChange: (text: string) => void,
  setIsStepValid: (isStepValid: boolean) => void,
}

export default function IdStep({ value, onChange, setIsStepValid }: IdStepProps) {
  const [isEmail, setIsEmail] = useState<boolean>(true);

  /* 정규 표현식으로 ID인지 Email인지 검사 / input 비어있을 땐 검사 안하고 오류 안띄움 */
  useEffect(() => {
    if (value === "") {
      setIsEmail(true);
      setIsStepValid(false);
      return;
    }

    const valid = isValidEmail(value);
    setIsEmail(valid);
    setIsStepValid(valid);
  }, [value])

  return(
    <ContentLayout>
      <Typography children='이메일 입력' font='medium28' color='defaultBlack' />
      <DefaultInput label='회원가입하고 책마루에 가입하세요!' placeholder='이메일 입력' isError={!isEmail} warningMessage="올바르지 않은 이메일 형식입니다." value={value} onChangeText={onChange} />
    </ContentLayout>
  )
}