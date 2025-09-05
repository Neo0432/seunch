import { FilledButtonIcon } from "@shared/ui/buttons";
import styles from "./style.module.css";
import { PropsWithChildren } from "react";
import { IFilledIconButtonProps } from "@shared/ui/buttons/icons-button/filled-icon-button/model/types";
import clsx from "clsx";

export default function FilledRoundedButton({
  className,
  children,
  ...buttonProps
}: PropsWithChildren<IFilledIconButtonProps>) {
  return (
    <FilledButtonIcon
      {...buttonProps}
      className={clsx(styles.button, className)}
    >
      {children}
    </FilledButtonIcon>
  );
}
