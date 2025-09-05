export interface IButtonProps {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  form?: string;
}

export type ButtonVariant = "primary" | "secondary";
