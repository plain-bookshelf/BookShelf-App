import { AuthNav } from '@/navigation/type';
import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';
import { useSignup } from './useSignup';
import { SignupForm } from '@/types';

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

  const updateStepValid = (index: number, valid: boolean) => {
    setStepValid(prev => {
      const next = [...prev];
      next[index] = valid;
      return next;
    });
  };

  const handlePrev = () => {
    if (step < 2) {
      /* TODO: 나중에 login / signup 페이지로 넘기도록 해야함 */
      return;
    }

    setStep(s => s - 1);
  };

  const handleNext = () => {
    if (step === maxStep) {
      signup({
        username: form.email,
        password: form.password,
        email: form.email,
        affiliation_name: form.library,
      });
      return;
    }
    if (step === maxStep + 1) {
      navigation.navigate('AuthHome');
      return;
    }
    
    setStep(s => s + 1);
  };

  return { updateStepValid, handlePrev, handleNext };
};
