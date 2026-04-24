import { useEffect, useRef, useState } from "react"
import ActionLayout from "../../../components/layout/authLayout/AuthStepComponentLayout/ActionLayout";
import KeyboardDismiss from "@/components/common/keyboardDismiss/KeyboardDismiss";
import AuthStepLayout from "@/components/layout/authLayout/AuthStepLayout";
import { useStepControl } from "../../../hooks/useStepControl";
import IntroStep from "./steps/IntroStep";
import { View } from "react-native";
import GenreSelectionStep from "./steps/GenreSelectionStep";
import ReadingTimeStep from "./steps/ReadingTimeStep";
import RecommendationPreviewStep from "./steps/RecommendationPreviewStep";
import { colorStyle } from "@/styles/colorStyle";
import ComponentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ComponentLayout";
import CompleteStep from "./steps/CompleteStep";

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [stepValid, setStepValid] = useState([true, false, false, false, true, true]);
  const { updateStepValid, goNext: handleNext } = useStepControl({ setStep, setStepValid })

  const content = step === 4 ? 
  (
    <View style={{ flex: 1, backgroundColor: colorStyle.defaultWhite  }}>
      <View style={{ height: 56 }} />{ /* StepHeader가 필요 없기에 StepHeader 공간만큼 차지 */}
      <ActionLayout label={step < 5 ? '다음' : '시작하기'} onNext={handleNext} isValid={stepValid} step={step} isLayout={false} >        
        <StepContent step={step} updateStepValid={updateStepValid} />
      </ActionLayout>
    </View>
  ) : 
  (
    <AuthStepLayout>
      <> 
        <View style={{ height: 56 }} />{ /* StepHeader가 필요 없기에 StepHeader 공간만큼 차지 */}
        <ActionLayout label={step < 5 ? '다음' : '시작하기'} onNext={handleNext} isValid={stepValid} step={step}>
          <StepContent step={step} updateStepValid={updateStepValid} />
        </ActionLayout>
      </>
    </AuthStepLayout>
  );
  
  if(step === 4){
    return content;
  }

  return(
    <KeyboardDismiss>
      {content}
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

    case 4:
      return(
        <RecommendationPreviewStep />
      )

    default:
      return(
        <CompleteStep />
      );
  }
}