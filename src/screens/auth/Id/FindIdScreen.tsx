import ActionLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ActionLayout"
import StepHeader from "@/components/auth/authLayout/AuthStepComponentLayout/StepHeader"
import AuthStepLayout from "@/components/auth/authLayout/AuthStepLayout"
import KeyboardDismiss from "@/components/common/KeyboardDismiss"
import { useSignupStepControl } from "@/hooks/useSignupStepControl"
import { FindContentProps, FindForm } from "@/types/index"
import { useState } from "react"
import EmailStep from "./steps/EmailStep"
import VerificationStep from "./steps/VerificationStep"
import FoundIdStep from "./steps/FoundIdStep"

export default function FindIdScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FindForm>({email: '', verificationCode: ''});
  const [stepValid, setStepValid] = useState([false, false, false, true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, maxStep: 2, setStep, setStepValid })
  const labels = ['인증코드 발송', '다음', '로그인으로 돌아가기']

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <StepHeader onPrev={handlePrev} />
          <ActionLayout label={labels[step - 1]} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} form={form} setForm={setForm} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthStepLayout>
    </KeyboardDismiss>
  )
}


function StepContent({ step, form, setForm, updateStepValid }: FindContentProps) {
  switch (step) {
    case 1:
      return(
        <EmailStep value={form.email} onChange={(text: string) => setForm({...form, email: text})} setIsStepValid={(valid) => updateStepValid(0, valid)} />
      )

    case 2:
      return(
        <VerificationStep value={form.verificationCode} onChange={(text: string) => setForm({...form, verificationCode: text})}
          email={form.email} onChangeEmail={(text: string) => setForm({...form, email: text})} setIsStepValid={(valid) => updateStepValid(2, valid)}
        />
      )

    default:
      return(
        <FoundIdStep></FoundIdStep>
      );
  }
}