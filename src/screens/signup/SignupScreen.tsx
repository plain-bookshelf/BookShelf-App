import { useState } from "react";
import { Screen } from "react-native-screens";
import SignupHeader from "./SignupHeader";
import IdStep from "./steps/IdStep";
import ContentLayout from "./ContentLayout";
import ActionLayout from "./ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import { View } from "react-native";
import Button from "@/components/common/button/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const [step, setStep] = useState(2);
  const [form, setForm] = useState({id: '', email: '', password: ''});

  const handlePrev = () => setStep((s) => s - 1);
  const handleNext = () => setStep((s) => s + 1);

  return(
    <KeyboardDismiss>
     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}> {/* 이거 SafeAreaView 나중에 상위 Layout 으로 빼고 여기는 View로 바꿔야 함*/}
        <SignupHeader step={step} onPrev={handlePrev} />
        <ActionLayout label={step !== 5 ? '다음' : '완료'} onNext={handleNext}>
          <StepContent step={step} form={form} setForm={setForm} />
        </ActionLayout>
     </SafeAreaView>
    </KeyboardDismiss>
  )
}

interface StepContentProps {
  step: number,
  form: {id: string, email: string, password: string},
  setForm: (form: {id: string, email: string, password: string}) => void
}

function StepContent({ step, form, setForm}: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <ContentLayout>
          <IdStep />
        </ContentLayout>
      )

    case 2:
      return(
        <></>
      )
    default:
      break;
  }
}