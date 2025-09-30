import { ICategory } from "@shared/types/category";

export interface ICategoriesSwitchProps {
  value?: string;
  onChange?: (id: string) => void;
  categories?: ICategory[];
  className?: string;
}
