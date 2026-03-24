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
import AdminCodeStep from "./steps/AdminCodeStep";

export default function AdminSignupScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<AdminSignupForm>({ id: '', email: '', password: '', school: '', verificationCode: '', library: '', adminCode: '' });
  const [stepValid, setStepValid] = useState([false, false, false, false, false, true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, maxStep: 5, setStep, setStepValid });

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <StepHeader step={step} maxStep={5} onPrev={handlePrev} />
          <ActionLayout
            label={step < 6 ? '다음' : step === 6 ? '완료' : '로그인하러 가기'}
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

interface AdminSignupForm extends SignupForm {
  adminCode: string
}

type AdminStepContentProps = StepContentProps<AdminSignupForm>

function StepContent({ step, form, setForm, updateStepValid }: AdminStepContentProps) {
  switch (step) {
    case 1:
      return(
        <IdStep
          value={form.id}
          onChange={(text: string) => setForm({ ...form, id: text })}
          setIsStepValid={(valid) => updateStepValid(0, valid)}
        />
      )

    case 2:
      return(
        <VerificationStep
          value={form.verificationCode}
          onChange={(text: string) => setForm({ ...form, verificationCode: text })}
          setIsStepValid={(valid) => updateStepValid(1, valid)}
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
    
    case 5:
      return(
        <AdminCodeStep
          value={form.adminCode}
          onChange={(text: string) => setForm({ ...form, adminCode: text })}
          setIsStepValid={(valid) => updateStepValid(4, valid)}
        />
      )

    default:
      return(
        <CompletionStep />
      );
  }
}