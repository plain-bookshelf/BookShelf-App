import { useEffect, useRef, useState } from "react"
import SignupHeader from "./SignupHeader";
import IdStep from "./steps/IdStep";
import ActionLayout from "./ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import PasswordStep from "./steps/PasswordStep";
import VerificationStep from "./steps/VerificationStep";
import AuthLayout from "@/components/auth/authLayout/AuthLayout";
import Library from "./steps/LibraryStep";
import CompletionStep from "./steps/CompletionStep";

/**
 * Render the multi-step signup screen and manage its navigation and form state.
 *
 * Manages current step progression (including an intermediate verification step), a shared form object
 * (id, email, password, school, verificationCode, Library), an email-mode flag, and per-step validity.
 * Composes SignupHeader, ActionLayout, and the step-specific content (Id, Verification, Password, Library,
 * Completion) inside AuthLayout and KeyboardDismiss.
 *
 * @returns The Signup screen React element
 */
export default function Signup() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({id: '', email: '', password: '', school: '', verificationCode: '', Library: ''});
  const [isEmail, setIsEmail] = useState(false);
  const [stepValid, setStepValid] = useState([false, false, false, false, true]);

  const updateStepValid = (index: number, valid: boolean) => {
    setStepValid(prev => {
      const next = [...prev];
      next[index] = valid;
      return next;
    });
  };


  const handlePrev = () => {
    if(step === 1.5 && isEmail){
      setStep((s) => s - 0.5);
      return;
    }
    else if(step === 2 && isEmail){
      setStep((s) => s - 0.5);
      return;
    }

    if(step < 2){
      /* 나중에 login / signup 페이지로 넘기도록 해야함 */
      return;
    }

    setStep((s) => s - 1)
  };
  const handleNext = () => {
    if(isEmail){
      setStep((s) => s + 0.5);
      return;
    }

    setStep((s) => s + 1)
  };

  return(
    <KeyboardDismiss>
      <AuthLayout>
        <>  
          <SignupHeader step={step} onPrev={handlePrev} />
          <ActionLayout label={step < 3 ? '다음' : step === 3 ? '완료' : '로그인하러 가기'} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} form={form} setForm={setForm} setIsEmail={setIsEmail} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthLayout>
    </KeyboardDismiss>
  )
}

interface StepContentProps {
  step: number,
  form: {id: string, email: string, password: string, school: string, verificationCode: string, Library: string},
  setForm: (form: {id: string, email: string, password: string, school: string, verificationCode: string, Library: string}) => void,
  setIsEmail: (isEmail: boolean) => void,
  updateStepValid: (index: number, value: boolean) => void
}

/**
 * Render the child component that corresponds to the current signup step.
 *
 * Renders:
 * - 1 → IdStep
 * - 1.5 → VerificationStep
 * - 2 → PasswordStep
 * - 3 → LibraryStep
 * - default → CompletionStep
 *
 * @param step - Current step identifier; may be 1, 1.5, 2, 3, or another value for the completion view
 * @param form - Shared form state object (id, email, password, school, verificationCode, Library)
 * @param setForm - State setter for updating the shared form object
 * @param setIsEmail - Setter used by IdStep to mark whether the identifier is an email
 * @param updateStepValid - Callback to update per-step validity tracking; invoked with the step key and a boolean validity flag
 * @returns The JSX element for the active step
 */
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
        <Library value={form.Library} onChange={(text: string) => setForm({...form, Library: text})} setIsStepValid={(valid) => updateStepValid(3, valid)} />
      )

    default:
      return(
        <CompletionStep />
      );
  }
}