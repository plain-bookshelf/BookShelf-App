import { useEffect, useRef, useState } from "react"
import StepHeader from "../../../components/auth/authLayout/AuthStepComponentLayout/StepHeader";
import ActionLayout from "../../../components/auth/authLayout/AuthStepComponentLayout/ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import AuthStepLayout from "@/components/auth/authLayout/AuthStepLayout";
import { useSignupStepControl } from "../../../hooks/useSignupStepControl";
import IntroStep from "./steps/IntroStep";

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<OnboardingForm>({
    genres: {
      horror: false,
      mystery: false,
      fantasy: false,
      romance: false,
      humanities: false,
      science: false,
      practicalArts: false,
      essay: false,
      language: false,
    },
    readingTime: ''
  });
  const [isEmail, setIsEmail] = useState(false);
  const [stepValid, setStepValid] = useState([true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, maxStep: 4, setStep, isEmail, setStepValid })

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <>  
          <StepHeader step={step} maxStep={4} onPrev={handlePrev} />
          <ActionLayout label={step < 5 ? '다음' : '시작하기'} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} form={form} setForm={setForm} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthStepLayout>
    </KeyboardDismiss>
  )
}

interface OnboardingForm {
  genres: {
    horror: boolean,
    mystery: boolean,
    fantasy: boolean,
    romance: boolean,
    humanities: boolean,
    science: boolean,
    practicalArts: boolean,
    essay: boolean,
    language: boolean,
  },
  readingTime: string
}

interface StepContentProps {
  step: number;
  form: OnboardingForm;
  setForm: (form: OnboardingForm) => void;
  updateStepValid: (index: number, value: boolean) => void;
}

function StepContent({ step, form, setForm, updateStepValid }: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <IntroStep />
      )

    case 1.5:
      return(
        <></>
      )

    case 2:
      return(
        <></>
      )

    case 3:
      return(
        <></>
      )

    default:
      return(
        <></>
      );
  }
}