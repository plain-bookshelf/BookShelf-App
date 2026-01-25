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