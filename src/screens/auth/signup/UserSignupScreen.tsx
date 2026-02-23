import { useEffect, useRef, useState } from "react"
import StepHeader from "../../../components/layout/authLayout/AuthStepComponentLayout/StepHeader";
import IdStep from "./steps/IdStep";
import ActionLayout from "../../../components/layout/authLayout/AuthStepComponentLayout/ActionLayout";
import KeyboardDismiss from "@/components/common/keyboardDismiss/KeyboardDismiss";
import PasswordStep from "./steps/PasswordStep";
import VerificationStep from "./steps/VerificationStep";
import AuthStepLayout from "@/components/layout/authLayout/AuthStepLayout";
import Library from "./steps/LibraryStep";
import CompletionStep from "./steps/CompletionStep";
import { SignupForm, StepContentProps } from "@/types/index";
import { useSignupStepControl } from "../../../hooks/useSignupStepControl";

export default function UserSignupScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<SignupForm>({id: '', email: '', password: '', school: '', verificationCode: '', library: ''});
  const [isEmail, setIsEmail] = useState(false);
  const [stepValid, setStepValid] = useState([false, false, false, false, true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, maxStep: 3, setStep, isEmail, setStepValid })

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <StepHeader step={step} maxStep={3} onPrev={handlePrev} />
          <ActionLayout label={step < 3 ? '다음' : step === 3 ? '완료' : '로그인하러 가기'} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} form={form} setForm={setForm} setIsEmail={setIsEmail} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthStepLayout>
    </KeyboardDismiss>
  )
}

function StepContent({ step, form, setForm, setIsEmail, updateStepValid }: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <IdStep value={form.id} onChange={(text: string) => setForm({...form, id: text})} setIsStepValid={(valid) => updateStepValid(0, valid)} setIsEmail={setIsEmail} />
      )

    case 1.5:
      return(
        <VerificationStep value={form.verificationCode} onChange={(text: string) => setForm({...form, verificationCode: text})} setIsStepValid={(valid) => updateStepValid(1.5, valid)} />
      )

    case 2:
      return(
        <PasswordStep value={form.password} onChange={(text: string) => setForm({...form, password: text})} setIsStepValid={(valid) => updateStepValid(2, valid)} />
      )

    case 3:
      return(
        <Library value={form.library} onChange={(text: string) => setForm({...form, library: text})} setIsStepValid={(valid) => updateStepValid(3, valid)} />
      )

    default:
      return(
        <CompletionStep />
      );
  }
}