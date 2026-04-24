import { Dispatch, SetStateAction } from 'react';

interface UseStepControlParams {
  setStep: Dispatch<SetStateAction<number>>;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
}

export const useStepControl = ({ setStep, setStepValid }: UseStepControlParams) => {
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

  const goNext = () => {
    setStep(s => s + 1);
  };

  return { updateStepValid, handlePrev, goNext };
};
