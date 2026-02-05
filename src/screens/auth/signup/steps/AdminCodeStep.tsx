import Typography from "@/components/common/typography/Typography"
import { useEffect } from "react"
import ContentLayout from "../layout/ContentLayout";
import DefaultInput from "@/components/auth/authInput/DefaultInput";

interface AdminCodeStepStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function AdminCodeStep({ value, onChange, setIsStepValid }: AdminCodeStepStepProps) {

  useEffect(() => {
    if(value.trim().length !== 0){
      setIsStepValid(true)
    }
    else{
      setIsStepValid(false)
    }
  }, [value])
  
  return(
    <ContentLayout>
      <Typography children='인증 코드' font='medium28' color='defaultBlack' />
      <DefaultInput label='회원가입하고 책마루에 가입하세요' placeholder='인증 코드 입력' isError={false} warningMessage="" value={value} onChangeText={onChange} />
    </ContentLayout>
  )
}