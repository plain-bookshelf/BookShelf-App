export interface SignupForm {
  email: string;
  password: string;
  username: string;
  nickname: string;
  verificationCode: string;
  library: string;
}

export interface StepContentProps<TForm = SignupForm> {
  step: number;
  form: TForm;
  setForm: (form: TForm) => void;
  updateStepValid: (index: number, value: boolean) => void;
}