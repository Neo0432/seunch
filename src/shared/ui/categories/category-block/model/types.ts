import { ReactNode } from "react";

export interface ICategoryBlockProps {
  children: ReactNode; //title
  count?: string | number;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}
