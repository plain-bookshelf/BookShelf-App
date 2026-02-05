import { useEffect, useRef, useState } from "react"
import SignupHeader from "./layout/SignupHeader";
import IdStep from "./steps/IdStep";
import ActionLayout from "./layout/ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import PasswordStep from "./steps/PasswordStep";
import VerificationStep from "./steps/VerificationStep";
import AuthStepLayout from "@/components/auth/authLayout/AuthStepLayout";
import Library from "./steps/LibraryStep";
import CompletionStep from "./steps/CompletionStep";
import { SignupForm, StepContentProps } from "./steps/step.type";
import { useSignupStepControl } from "./hooks/useSignupStepControl";
import AdminCodeStep from "./steps/AdminCodeStep";

export default function AdminSignupScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<AdminSignupForm>({id: '', email: '', password: '', school: '', verificationCode: '', library: '', adminCode: ''});
  const [isEmail, setIsEmail] = useState(false);
  const [stepValid, setStepValid] = useState([false, false, false, false, false, true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, setStep, isEmail, setStepValid })

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <SignupHeader step={step} maxStep={4} onPrev={handlePrev} />
          <ActionLayout label={step < 4 ? '다음' : step === 4 ? '완료' : '로그인하러 가기'} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} form={form} setForm={setForm} setIsEmail={setIsEmail} updateStepValid={updateStepValid} />
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

function StepContent({ step, form, setForm, setIsEmail, updateStepValid }: AdminStepContentProps) {
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
    
    case 4:
      return(
        <AdminCodeStep value={form.adminCode} onChange={(text: string) => setForm({...form, adminCode: text})} setIsStepValid={(valid) => updateStepValid(4, valid)} />
      )

    default:
      return(
        <CompletionStep />
      );
  }
}