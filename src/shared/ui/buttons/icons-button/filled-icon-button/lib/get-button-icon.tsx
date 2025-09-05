import { JSX } from "react";
import { IFilledButtonIcon } from "../model/types";
import { SvgSend } from "@shared/assets/icons/components/buttons/send";

const icons: Record<IFilledButtonIcon, () => JSX.Element> = {
  send: () => <SvgSend width={32} height={32} fill="currentColor" />,
};

export const getFilledButtonIcon = (icon: IFilledButtonIcon) => {
  return icons[icon];
};
