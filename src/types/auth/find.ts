export interface FindForm {
  email: string;
  verificationCode: string;
}

export interface FindContentProps<TForm = FindForm> {
  step: number;
  form: TForm;
  setForm: (form: TForm) => void;
  updateStepValid: (index: number, value: boolean) => void;
}