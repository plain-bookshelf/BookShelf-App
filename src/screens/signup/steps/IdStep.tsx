import AuthInput from "@/components/auth/authInput/AuthInput";
import Typography from "@/components/common/typography/Typography";
import { useEffect } from "react";

interface IdStepProps {
  value: string;
  onChange: (text: string) => void;
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function IdStep({ value, onChange, setIsStepValid }: IdStepProps) {
  useEffect(() => {
    if(value){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value])

  return(
    <>
      <Typography children='아이디를 생성하세요.' font='semiBold24' color='defaultBlack' />
      <AuthInput label='' placeholder='아이디를 입력해주세요.' isError={false} warningMessage="이미 존재하는 아이디입니다." value={value} onChangeText={onChange} />
    </>
  )
}