import { useEffect, useRef, useState } from "react"
import SignupHeader from "./SignupHeader";
import IdStep from "./steps/IdStep";
import ContentLayout from "./ContentLayout";
import ActionLayout from "./ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import PasswordStep from "./steps/PasswordStep";
import EmailStep from "./steps/EmailStep";
import VerificationStep from "./steps/VerificationStep";
import AuthLayout from "@/components/auth/authLayout/AuthLayout";

export default function Signup() {
  const [step, setStep] = useState(1);
  const prevStepRef = useRef(1);
  const [form, setForm] = useState({id: '', email: '', password: '', school: '', verificationCode: ''});
  const [isStepValid, setIsStepValid] = useState(false);

  useEffect(() => {
    if(prevStepRef.current < step){
      setIsStepValid(false);
    }

    prevStepRef.current = step;
  }, [step])

  const handlePrev = () => setStep((s) => s - 1);
  const handleNext = () => setStep((s) => s + 1);

  return(
    <KeyboardDismiss>
      <AuthLayout>
        <>
          <SignupHeader step={step} onPrev={handlePrev} />
          <ActionLayout label={step !== 5 ? '다음' : '완료'} onNext={handleNext} isValid={isStepValid}>
            <StepContent step={step} form={form} setForm={setForm} setIsStepValid={setIsStepValid} />
          </ActionLayout>
        </>
     </AuthLayout>
    </KeyboardDismiss>
  )
}

interface StepContentProps {
  step: number,
  form: {id: string, email: string, password: string, school: string, verificationCode: string},
  setForm: (form: {id: string, email: string, password: string, school: string, verificationCode: string}) => void
  setIsStepValid: (isStepValid: boolean) => void
}

function StepContent({ step, form, setForm, setIsStepValid }: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <ContentLayout>
          <IdStep value={form.id} onChange={(text: string) => setForm({...form, id: text})} setIsStepValid={setIsStepValid} /> {/* 최신 상태 유지를 위해 onChange에 함수형으로 넘김*/}
        </ContentLayout>
      )

    case 2:
      return(
        <ContentLayout>
          <PasswordStep value={form.password} onChange={(text: string) => setForm({...form, password: text})} setIsStepValid={setIsStepValid} />
        </ContentLayout>
      )

    case 3:
      return(
        <ContentLayout>
          <EmailStep value={form.email} onChange={(text: string) => setForm({...form, email: text})} setIsStepValid={setIsStepValid} />
        </ContentLayout>
      )

    case 4:
      return(
        <ContentLayout>
          <VerificationStep value={form.verificationCode} onChange={(text: string) => setForm({...form, verificationCode: text})} setIsStepValid={setIsStepValid} />
        </ContentLayout>
      )
    default:
      break;
  }
}