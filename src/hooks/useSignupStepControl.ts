import { AuthNav } from '@/navigation/type';
import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';
import { useSignup } from './useSignup';
import { SignupForm } from '@/types';
import { useEmailSend } from './useEmailSend';
import { useEmailVerification } from './useEmailVerification';

interface UseSignupStepControlParams {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
  form: SignupForm;
}

export const useSignupStepControl = ({ step, maxStep, setStep, setStepValid, form }: UseSignupStepControlParams) => {
  const navigation = useNavigation<AuthNav>();
  const { mutateAsync: signup } = useSignup();
  const { mutateAsync: emailSend } = useEmailSend();
  const { mutateAsync: emailVerification } = useEmailVerification();
  
  const updateStepValid = (index: number, valid: boolean) => {
    setStepValid(prev => {
      const next = [...prev];
      next[index] = valid;
      return next;
    });
  };

  const handlePrev = () => {
    setStep(s => s - 1);
  };

  const handleNext = async () => {
    if (step === 1) {
      try {
        await emailSend({
        email: form.email,
      });
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
    
    setStep(s => s + 1);
  };

  return { updateStepValid, handlePrev, handleNext };
};
