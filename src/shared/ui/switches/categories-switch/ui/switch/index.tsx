import { CategoryBlock } from "@shared/ui/categories";
import { ICategoriesSwitchProps } from "../../model";
import clsx from "clsx";
import styles from "./style.module.css";

export default function Switch({
  categories,
  className,
}: ICategoriesSwitchProps) {
  return (
    <div className={clsx(styles.switch, className)}>
      {categories?.map((category) => (
        <CategoryBlock
          count={category.count}
          key={category.id}
          selected={category.id === "1"}
          className={styles.categories}
        >
          {category.title}
        </CategoryBlock>
      ))}
    </div>
  );
}
