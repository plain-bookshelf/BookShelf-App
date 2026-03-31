import Typography from "@/components/common/typography/Typography";
import ContentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout";
import { useEffect } from "react";
import AffiliationInput from "@/components/common/input/AffiliationInput";

interface LibraryStepProps {
  value: string,
  onChange: (text: string) => void,
  setIsStepValid: (isStepValid: boolean) => void,
}

export default function LibraryStep({ value, onChange, setIsStepValid }: LibraryStepProps) {
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
        <Typography children='소속 도서관 입력' font='medium28' color='defaultBlack' />
        <AffiliationInput label='회원가입하고 책마루에 가입하세요' value={value} onChange={onChange} />
      </ContentLayout>
    )
}