import { CategoryBlock } from "@shared/ui/categories";
import { ICategoriesSwitchProps } from "../../model";
import clsx from "clsx";
import styles from "./style.module.css";

export default function Switch({
  value,
  onChange,
  categories,
  className,
}: ICategoriesSwitchProps) {
  return (
    <div className={clsx(styles.switch, className)}>
      {categories?.map((category) => (
        <CategoryBlock
          key={category.id}
          selected={category.id === value}
          onClick={() => onChange?.(category.id)}
          {...category}
          className={styles.categories}
        >
          {category.title}
        </CategoryBlock>
      ))}
    </div>
  );
}
