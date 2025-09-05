import clsx from "clsx";
import { ICategoryBlockProps } from "../../model/types";
import style from "./style.module.css";

export default function CategoryBlock({
  count,
  className,
  selected,
  onClick,
  children,
}: ICategoryBlockProps) {
  return (
    <div
      className={clsx(style.category, selected && style.selected, className)}
      onClick={onClick}
    >
      <span className={style.title}>{children}</span>
      <span className={style.count}>{count}</span>
    </div>
  );
}
