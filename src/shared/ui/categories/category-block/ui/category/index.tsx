import clsx from "clsx";
import { ICategoryBlockProps } from "../../model/types";
import style from "./style.module.css";
import { ButtonBase } from "@shared/ui/buttons";

export default function CategoryBlock({
  count,
  className,
  selected,
  children,

  ...buttonProps
}: ICategoryBlockProps) {
  return (
    <ButtonBase
      className={clsx(style.category, selected && style.selected, className)}
      {...buttonProps}
    >
      <span className={style.title}>{children}</span>
      <span className={style.count}>{count}</span>
    </ButtonBase>
  );
}
