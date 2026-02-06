import { AuthNav } from '@/navigation/type';
import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';

interface UseSignupStepControlParams {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  isEmail?: boolean;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
}

export function useSignupStepControl({ step, maxStep, setStep, isEmail, setStepValid }: UseSignupStepControlParams) {
  const navigation = useNavigation<AuthNav>();

  const updateStepValid = (index: number, valid: boolean) => {
    setStepValid(prev => {
      const next = [...prev];
      next[index] = valid;
      return next;
    });
  };

  const handlePrev = () => {
    if (step === 1.5 && isEmail) {
      setStep(s => s - 0.5);
      return;
    } else if (step === 2 && isEmail) {
      setStep(s => s - 0.5);
      return;
    }

    if (step < 2) {
      /* TODO: 나중에 login / signup 페이지로 넘기도록 해야함 */
      return;
    }

    setStep(s => s - 1);
  };

  const handleNext = () => {
    if(step === maxStep + 1){
      navigation.navigate('AuthHome');
    }
    else if (isEmail) {
      setStep(s => s + 0.5);
      return;
    }

    setStep(s => s + 1);
  };

  return { updateStepValid, handlePrev, handleNext };
}
