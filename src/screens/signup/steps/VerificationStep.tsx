import AuthInput from "@/components/auth/authInput/AuthInput"
import Typography from "@/components/common/typography/Typography"
import * as S from "./VerificationStep.styles"

interface VerificationStepProps {
  value: string,
  onChange: (text: string) => void
}

export default function VerificationStep({ value, onChange }: VerificationStepProps) {

  return(
    <>
      <Typography children='인증번호를 입력하세요.' font='semiBold24' color='defaultBlack' />
      <S.AuthInputContainer>
        <AuthInput label='' placeholder='인증번호를 입력해주세요.' size='large' isError={false} warningMessage="올바르지 않은 인증번호입니다." value={value} onChangeText={onChange} />
        <S.Timer>
          <Typography children='5:00' font='regular14' color='timerRed' />
        </S.Timer>
      </S.AuthInputContainer>
    </>
  )
}