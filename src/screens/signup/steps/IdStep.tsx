import AuthInput from "@/components/auth/authInput/AuthInput";
import Typography from "@/components/common/typography/Typography";
import { useEffect } from "react";

interface IdStepProps {
  value: string,
  onChange: (text: string) => void,
  setIsStepValid: (isStepValid: boolean) => void,
  setIsEmail: (isEmail: boolean) => void,
}

export default function IdStep({ value, onChange, setIsStepValid, setIsEmail }: IdStepProps) {
  /* 우선 IdStep에서만 쓰는데 나중에 쓰는 곳 더 생기면 utills로 빼도 괜찮지 않을까 싶음 */
  const emailRegex = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

  /* value 변화 감지 후 조건에 맞을 경우 버튼 활성화 */
  useEffect(() => {
    if(value){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value])

  useEffect(() => {
    if(value){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [])

  /* 정규 표현식으로 ID인지 Email인지 검사 */
  useEffect(() => {
    const isEmail = emailRegex.test(value);
    setIsEmail(isEmail);
  }, [value])

  return(
    <>
      <Typography children='아이디를 생성하세요.' font='medium28' color='defaultBlack' />
      <AuthInput label='회원가입하고 책마루에 가입하세요!' placeholder='이메일 또는 아이디 생성' isError={false} warningMessage="이미 존재하는 아이디입니다." value={value} onChangeText={onChange} />
    </>
  )
}