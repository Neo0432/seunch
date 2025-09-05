import { forwardRef, PropsWithChildren } from "react";
import { clsx } from "clsx";
import { IButtonProps } from "@shared/ui/buttons/types";

export const ButtonBase = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IButtonProps>
>(({ onClick, className, type = "button", disabled, children, form }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      form={form}
      className={clsx("flex cursor-pointer", className)}
    >
      {children}
    </button>
  );
});
