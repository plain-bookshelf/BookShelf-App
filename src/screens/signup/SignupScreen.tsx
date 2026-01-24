import { useEffect, useRef, useState } from "react"
import SignupHeader from "./SignupHeader";
import IdStep from "./steps/IdStep";
import ActionLayout from "./ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import PasswordStep from "./steps/PasswordStep";
import VerificationStep from "./steps/VerificationStep";
import AuthLayout from "@/components/auth/authLayout/AuthLayout";

export default function Signup() {
  const [step, setStep] = useState(1);
  const prevStepRef = useRef(1);
  const [form, setForm] = useState({id: '', email: '', password: '', school: '', verificationCode: ''});
  const [isEmail, setIsEmail] = useState(false);
  const [isStepValid, setIsStepValid] = useState(false);

  useEffect(() => {
    if(prevStepRef.current < step){
      setIsStepValid(false);
    }

    prevStepRef.current = step;
  }, [step])

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
          <ActionLayout label={step !== 5 ? '다음' : '완료'} onNext={handleNext} isValid={isStepValid}>
            <StepContent step={step} form={form} setForm={setForm} setIsStepValid={setIsStepValid} isEmail={isEmail} setIsEmail={setIsEmail} />
          </ActionLayout>
        </>
     </AuthLayout>
    </KeyboardDismiss>
  )
}

interface StepContentProps {
  step: number,
  form: {id: string, email: string, password: string, school: string, verificationCode: string},
  setForm: (form: {id: string, email: string, password: string, school: string, verificationCode: string}) => void,
  setIsStepValid: (isStepValid: boolean) => void,
  isEmail: boolean,
  setIsEmail: (isEmail: boolean) => void
}

function StepContent({ step, form, setForm, setIsStepValid, isEmail, setIsEmail }: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <IdStep value={form.id} onChange={(text: string) => setForm({...form, id: text})} setIsStepValid={setIsStepValid} setIsEmail={setIsEmail} />
      )

    case 1.5:
      return(
        <VerificationStep value={form.verificationCode} onChange={(text: string) => setForm({...form, verificationCode: text})} setIsStepValid={setIsStepValid} />
      )

    case 2:
      return(
        <PasswordStep value={form.password} onChange={(text: string) => setForm({...form, password: text})} setIsStepValid={setIsStepValid} />
      )

    case 3:
      return(
        <VerificationStep value={form.verificationCode} onChange={(text: string) => setForm({...form, verificationCode: text})} setIsStepValid={setIsStepValid} />
      )
    default:
      break;
  }
}