import { ButtonVariant, IButtonProps } from "@shared/ui/buttons/types";

export type IconPosition = "left" | "right";
export type IFilledButtonIcon = "send";
export interface IFilledIconButtonProps extends IButtonProps {
  icon: IFilledButtonIcon;
  iconPosition: IconPosition;
  variant: ButtonVariant;
}
