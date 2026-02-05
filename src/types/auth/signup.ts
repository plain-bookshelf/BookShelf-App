export interface SignupForm {
  id: string;
  email: string;
  password: string;
  school: string;
  verificationCode: string;
  library: string;
}

export interface StepContentProps<TForm = SignupForm> {
  step: number;
  form: TForm;
  setForm: (form: TForm) => void;
  setIsEmail: (isEmail: boolean) => void;
  updateStepValid: (index: number, value: boolean) => void;
}