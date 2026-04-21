import { AuthNav } from '@/navigation/type';
import { useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';
import { FindPasswordForm } from '@/types';
import { useEmailSend, useFindPassword, usePasswordReset } from '@/hooks';

interface UseFindPasswordStepControlParams {
  step: number;
  maxStep: number;
  setStep: Dispatch<SetStateAction<number>>;
  setStepValid: Dispatch<SetStateAction<boolean[]>>;
  form: FindPasswordForm;
}

export const useFindPasswordStepControl = ({ step, maxStep, setStep, setStepValid, form }: UseFindPasswordStepControlParams) => {
  const navigation = useNavigation<AuthNav>();
  const { mutateAsync: emailSend } = useEmailSend();
  const { mutateAsync: findPassword } = useFindPassword();
  const { mutateAsync: passwordReset } = usePasswordReset();
  
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
        await emailSend({params: {email: form.email}, codeType: "FIND_PASSWORD"});
      } catch (error) {
        console.error("이메일 전송 실패", error);
        return;
      }
    } else if (step === 2) {
      try {
        await findPassword({
        email: form.email,
        verification_code: form.verification_code,
      });
      } catch (error) {
        console.error("이메일 인증 실패", error);
        return;
      }
    } else if (step === maxStep) {
      try {
        await passwordReset({
        email: form.email,
        new_password: form.new_password,
      });
      } catch (error) {
        console.error("비밀번호 재설정 실패", error);
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
