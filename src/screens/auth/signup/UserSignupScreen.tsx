import { useEffect, useRef, useState } from "react"
import StepHeader from "../../../components/layout/authLayout/AuthStepComponentLayout/StepHeader";
import IdStep from "./steps/EmailStep";
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
  const [form, setForm] = useState<SignupForm>({ email: '', password: '', username: '', nickname: '', verificationCode: '', library: '' });
  const [stepValid, setStepValid] = useState([false, false, false, false, true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, maxStep: 4, setStep, setStepValid, form });

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <StepHeader step={step} maxStep={4} onPrev={handlePrev} />
          <ActionLayout
            label={step < 5 ? '다음' : step === 5 ? '완료' : '로그인하러 가기'}
            onNext={handleNext}
            isValid={stepValid}
            step={step}
          >
            <StepContent step={step} form={form} setForm={setForm} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthStepLayout>
    </KeyboardDismiss>
  )
}

function StepContent({ step, form, setForm, updateStepValid }: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <IdStep
          value={form.email}
          onChange={(text: string) => setForm({ ...form, email: text })}
          setIsStepValid={(valid) => updateStepValid(0, valid)}
        />
      )

    case 2:
      return(
        <VerificationStep
          value={form.verificationCode}
          onChange={(text: string) => setForm({ ...form, verificationCode: text })}
          setIsStepValid={(valid) => updateStepValid(1, valid)}
          email={form.email}
        />
      )

    case 3:
      return(
        <PasswordStep
          value={form.password}
          onChange={(text: string) => setForm({ ...form, password: text })}
          setIsStepValid={(valid) => updateStepValid(2, valid)}
        />
      )

    case 4:
      return(
        <Library
          value={form.library}
          onChange={(text: string) => setForm({ ...form, library: text })}
          setIsStepValid={(valid) => updateStepValid(3, valid)}
        />
      )

    default:
      return(
        <CompletionStep />
      );
  }
}