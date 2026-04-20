import ActionLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ActionLayout"
import StepHeader from "@/components/layout/authLayout/AuthStepComponentLayout/StepHeader"
import AuthStepLayout from "@/components/layout/authLayout/AuthStepLayout"
import KeyboardDismiss from "@/components/common/keyboardDismiss/KeyboardDismiss"
import { useState } from "react"
import EmailStep from "./steps/EmailStep"
import VerificationStep from "./steps/VerificationStep"
import ResetPasswordStep from "./steps/ResetPasswordStep"
import { useFindPasswordStepControl } from "@/hooks/useFindPasswordStepControl"
import { StepContentProps, type FindPasswordForm } from "@/types"

export default function FindPasswordScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FindPasswordForm>({email: '', verification_code: '', new_password: ''});
  const [stepValid, setStepValid] = useState([false, false, false]);
  const { updateStepValid, handlePrev, handleNext } = useFindPasswordStepControl({ step, maxStep: 2, setStep, setStepValid, form })
  const labels = ['인증코드 발송', '다음', '로그인으로 돌아가기']

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <StepHeader onPrev={handlePrev} step={step} isShow={false} />
          <ActionLayout label={labels[step - 1]} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} form={form} setForm={setForm} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthStepLayout>
    </KeyboardDismiss>
  )
}

type FindPasswordContentProps = StepContentProps<FindPasswordForm>

function StepContent({ step, form, setForm, updateStepValid }: FindPasswordContentProps) {
  switch (step) {
    case 1:
      return(
        <EmailStep value={form.email} onChange={(text: string) => setForm({...form, email: text})} setIsStepValid={(valid) => updateStepValid(0, valid)} />
      )

    case 2:
      return(
        <VerificationStep value={form.verification_code} onChange={(text: string) => setForm({...form, verification_code: text})}
          email={form.email} onChangeEmail={(text: string) => setForm({...form, email: text})} setIsStepValid={(valid) => updateStepValid(1, valid)}
        />
      )

    default:
      return(
        <ResetPasswordStep value={form.new_password} onChange={(text: string) => setForm({...form, new_password: text})} setIsStepValid={(valid) => updateStepValid(2, valid)} />
      );
  }
}