import { FocusEvent, KeyboardEvent, HTMLInputTypeAttribute } from "react";

export interface IInputBaseProps {
  id?: string;
  value?: any | null;
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  onBlur?: () => void;
  onFocus?: (e?: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e?: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (...event: any[]) => void;
  pattern?: string;
  disabled?: boolean;
  readOnly?: boolean;
}
