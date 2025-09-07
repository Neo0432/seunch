import style from "./style.module.css";
import { IMessageProps } from "../../model/types";
import clsx from "clsx";

export function MessageBubble({ content, date, className }: IMessageProps) {
  return (
    <div className={clsx(style.bubble, className)}>
      <span className={style.content}>{content}</span>
      <span className={style.time}>
        {new Date(date).toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}
