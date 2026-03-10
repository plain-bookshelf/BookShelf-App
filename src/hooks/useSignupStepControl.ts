import { AuthNav } from '@/navigation/type';
import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';

interface UseSignupStepControlParams {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
}

export function useSignupStepControl({ step, maxStep, setStep, setStepValid }: UseSignupStepControlParams) {
  const navigation = useNavigation<AuthNav>();

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
    if (step === maxStep + 1) {
      navigation.navigate('AuthHome');
    }
    
    setStep(s => s + 1);
  };

  return { updateStepValid, handlePrev, handleNext };
}
