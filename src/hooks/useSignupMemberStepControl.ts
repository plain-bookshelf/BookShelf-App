import { Dispatch, SetStateAction } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthNav } from '@/navigation/type';
import { SignupForm } from '@/types';
import { useSignup } from './useSignup';
import { useEmailSend } from './useEmailSend';
import { useEmailVerification } from './useEmailVerification';
import { useStepControl } from './useStepControl';

interface UseSignupMemberStepControlParams {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
  form: SignupForm;
}

export const useSignupMemberStepControl = ({
  step,
  maxStep,
  setStep,
  setStepValid,
  form,
}: UseSignupMemberStepControlParams) => {
  const navigation = useNavigation<AuthNav>();
  const { updateStepValid, handlePrev, goNext } = useStepControl({ setStep, setStepValid });
  const { mutateAsync: signup } = useSignup();
  const { mutateAsync: emailSend } = useEmailSend();
  const { mutateAsync: emailVerification } = useEmailVerification();

  const handleNext = async () => {
    if (step === 1) {
      try {
        await emailSend({ params: { email: form.email }, codeType: "VERIFICATION_EMAIL" });
      } catch (error) {
        console.error("이메일 전송 실패", error);
        return;
      }
    } else if (step === 2) {
      try {
        await emailVerification({
          email: form.email,
          verification_code: form.verificationCode,
        });
      } catch (error) {
        console.error("이메일 인증 실패", error);
        return;
      }
    } else if (step === maxStep) {
      try {
        await signup({
          username: form.email,
          password: form.password,
          email: form.email,
          affiliation_name: form.library,
        });
      } catch (error) {
        console.error("회원가입 실패", error);
        return;
      }
    } else if (step === maxStep + 1) {
      navigation.navigate('AuthHome');
      return;
    }

    goNext();
  };

  return { updateStepValid, handlePrev, handleNext };
};
