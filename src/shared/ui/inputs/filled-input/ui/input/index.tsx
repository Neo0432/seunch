import { InputBase } from "@shared/ui/inputs/base-input";
import clsx from "clsx";
import { IInputBaseProps } from "@shared/ui/inputs/types";
import style from "./style.module.css";

export function FilledInput({ className, ...inputBaseProps }: IInputBaseProps) {
  return (
    <InputBase {...inputBaseProps} className={clsx(style.input, className)} />
  );
}
