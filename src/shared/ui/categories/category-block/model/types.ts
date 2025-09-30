import { IButtonProps } from "@shared/ui/buttons/types";
import { ReactNode } from "react";

export interface ICategoryBlockProps extends IButtonProps {
  children: ReactNode; //title
  count?: string | number;
  className?: string;
  selected?: boolean;
}
