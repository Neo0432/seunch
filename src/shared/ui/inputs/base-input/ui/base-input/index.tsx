import { IInputBaseProps } from "@shared/ui/inputs/types";

export function InputBase({
  id,
  value,
  placeholder,
  className,
  type = "text",
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
  pattern,
  disabled,
  readOnly,
}: IInputBaseProps) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value || ""}
      type={type}
      className={className}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onChange={onChange}
      autoComplete="on"
      pattern={pattern}
      disabled={disabled}
      readOnly={readOnly}
    />
  );
}
