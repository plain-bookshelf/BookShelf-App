import { useEffect, useRef, useState } from "react"
import StepHeader from "../../../components/auth/authLayout/AuthStepComponentLayout/StepHeader";
import ActionLayout from "../../../components/auth/authLayout/AuthStepComponentLayout/ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import AuthStepLayout from "@/components/auth/authLayout/AuthStepLayout";
import { useSignupStepControl } from "../../../hooks/useSignupStepControl";
import IntroStep from "./steps/IntroStep";
import { View } from "react-native";
import GenreSelectionStep from "./steps/GenreSelectionStep";
import ReadingTimeStep from "./steps/ReadingTimeStep";

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [stepValid, setStepValid] = useState([true, false, false, false, true, true]);
  const { updateStepValid, handlePrev, handleNext } = useSignupStepControl({ step, maxStep: 4, setStep, setStepValid })

  return(
    <KeyboardDismiss>
      <AuthStepLayout>
        <> 
          <View style={{ height: 56 }} /> { /* StepHeader가 필요 없기에 StepHeader 공간만큼 차지 */}
          <ActionLayout label={step < 5 ? '다음' : '시작하기'} onNext={handleNext} isValid={stepValid} step={step}>
            <StepContent step={step} updateStepValid={updateStepValid} />
          </ActionLayout>
        </>
     </AuthStepLayout>
    </KeyboardDismiss>
  )
}

interface StepContentProps {
  step: number;
  updateStepValid: (index: number, value: boolean) => void;
}

function StepContent({ step, updateStepValid }: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <IntroStep />
      )

    case 2:
      return(
        <GenreSelectionStep setIsStepValid={(valid) => updateStepValid(2, valid)} />
      )

    case 3:
      return(
        <ReadingTimeStep setIsStepValid={(valid) => updateStepValid(3, valid)} />
      )

    default:
      return(
        <></>
      );
  }
}