import { ButtonBase } from "@shared/ui/buttons/button-base";
import { IFilledIconButtonProps } from "../../model/types";
import { PropsWithChildren, useMemo } from "react";
import { getFilledButtonIcon } from "../../lib/get-button-icon";
import styles from "./style.module.css";
import clsx from "clsx";

export default function Button({
  icon,
  iconPosition = "left",
  variant = "primary",
  className,
  children,
  ...buttonProps
}: PropsWithChildren<IFilledIconButtonProps>) {
  const iconCopmonent = useMemo(() => getFilledButtonIcon(icon), [icon]);
  return (
    <ButtonBase
      {...buttonProps}
      className={clsx(
        styles.button,
        variant === "primary" ? styles.primary : styles.primary,
        className
      )}
    >
      <i>{iconPosition === "left" && iconCopmonent()}</i>
      {children}
      <i>{iconPosition === "right" && iconCopmonent()}</i>
    </ButtonBase>
  );
}
