export interface EditFieldProps {
  initial: string;
  onSave: (s: string) => void;
  abortEdit?: () => void;
}
