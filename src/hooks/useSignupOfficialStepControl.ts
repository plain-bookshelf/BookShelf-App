import { Dispatch, SetStateAction } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthNav } from '@/navigation/type';
import { SignupOfficialForm } from '@/types';
import { useSignupOfficial } from './useSignupOfficial';
import { useEmailSend } from './useEmailSend';
import { useEmailVerification } from './useEmailVerification';
import { useStepControl } from './useStepControl';

interface UseSignupOfficialStepControlParams {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
  form: SignupOfficialForm;
}

export const useSignupOfficialStepControl = ({
  step,
  maxStep,
  setStep,
  setStepValid,
  form,
}: UseSignupOfficialStepControlParams) => {
  const navigation = useNavigation<AuthNav>();
  const { updateStepValid, handlePrev, goNext } = useStepControl({ setStep, setStepValid });
  const { mutateAsync: signupOfficial } = useSignupOfficial();
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
        await signupOfficial({
          username: form.email,
          password: form.password,
          email: form.email,
          affiliation_name: form.library,
          verification_code: form.adminCode,
        });
      } catch (error) {
        console.error("관계자 회원가입 실패", error);
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
