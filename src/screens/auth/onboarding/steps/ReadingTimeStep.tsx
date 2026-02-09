import Typography from "@/components/common/typography/Typography"
import { useEffect, useState } from "react"
import ContentLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ContentLayout";
import DefaultInput from "@/components/auth/authInput/DefaultInput";

interface AdminCodeStepStepProps {
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function ReadingTimeStep({ setIsStepValid }: AdminCodeStepStepProps) {
  const [readingTime, setReadingTime] = useState('');

  useEffect(() => {
    if(readingTime.trim().length !== 0){
      setIsStepValid(true)
    }
    else{
      setIsStepValid(false)
    }
  }, [readingTime])
  
  return(
    <ContentLayout>
      <Typography children='주로 언제 책을 읽으시나요?' font='medium28' color='defaultBlack' />
      <DefaultInput label='몇 가지만 알려주면 맞춤 책을 준비할게요' placeholder='시간대 입력' isError={false} warningMessage="" value={readingTime} onChangeText={setReadingTime} />
    </ContentLayout>
  )
}