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
  const { mutate: signup } = useSignup();
  const { mutate: emailSend } = useEmailSend();
  const { mutate: emailVerification } = useEmailVerification();

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

  const handleNext = () => {
    if (step === 1) {
      emailSend({
        email: form.email,
      });
    } else if (step === 2) {
      emailVerification({
        email: form.email,
        verification_code: form.verificationCode,
      });
    } else if (step === maxStep) {
      signup({
        username: form.email,
        password: form.password,
        email: form.email,
        affiliation_name: form.library,
      });
      return;
    } else if (step === maxStep + 1) {
      navigation.navigate('AuthHome');
      return;
    }
    
    setStep(s => s + 1);
  };

  return { updateStepValid, handlePrev, handleNext };
};
