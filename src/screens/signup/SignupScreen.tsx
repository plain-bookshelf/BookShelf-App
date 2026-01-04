import { useState } from "react"
import SignupHeader from "./SignupHeader";
import IdStep from "./steps/IdStep";
import ContentLayout from "./ContentLayout";
import ActionLayout from "./ActionLayout";
import KeyboardDismiss from "@/components/common/KeyboardDismiss";
import { SafeAreaView } from "react-native-safe-area-context";
import PasswordStep from "./steps/PasswordStep";
import EmailStep from "./steps/EmailStep";

export default function Signup() {
  const [step, setStep] = useState(2);
  const [form, setForm] = useState({id: '', email: '', password: '', school: ''});

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
  form: {id: string, email: string, password: string, school: string},
  setForm: (form: {id: string, email: string, password: string, school: string}) => void
}

function StepContent({ step, form, setForm}: StepContentProps) {
  switch (step) {
    case 1:
      return(
        <ContentLayout>
          <IdStep value={form.id} onChange={(text: string) => setForm({...form, id: text})} /> {/* 최신 상태 유지를 위해 onChange에 함수형으로 넘김*/}
        </ContentLayout>
      )

    case 2:
      return(
        <ContentLayout>
          <PasswordStep value={form.password} onChange={(text: string) => setForm({...form, password: text})} />
        </ContentLayout>
      )

    case 3:
      return(
        <ContentLayout>
          <EmailStep value={form.email} onChange={(text: string) => setForm({...form, email: text})} />
        </ContentLayout>
      )
    default:
      break;
  }
}