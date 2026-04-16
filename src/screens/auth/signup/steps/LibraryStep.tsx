import Typography from "@/components/common/typography/Typography";
import ContentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout";
import { useEffect } from "react";
import AffiliationInput from "@/components/common/input/AffiliationInput";
import { useAffiliation } from "@/hooks/useAffiliation";
import AffiliationAutoComplete from "@/screens/auth/signup/components/affiliationAutoComplete/AffiliationAutoComplete";

interface LibraryStepProps {
  value: string,
  onChange: (text: string) => void,
  setIsStepValid: (isStepValid: boolean) => void,
}

export default function LibraryStep({ value, onChange, setIsStepValid }: LibraryStepProps) {
  const { result, setQuery, query } = useAffiliation();
  const onSelect = (selected: string) => {
    onChange(selected);
    setQuery(selected);
  };

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
        <AffiliationInput
          label='회원가입하고 책마루에 가입하세요'
          value={value}
          onChange={(text) => {
            onChange(text);
            setQuery(text);
          }}
        />
        <AffiliationAutoComplete query={query} result={result} onSelect={onSelect} />
      </ContentLayout>
    )
}