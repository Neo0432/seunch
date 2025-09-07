import { SvgMessageTail } from "@shared/assets/icons/components/message-tails/message-tail";
import style from "./style.module.css";
import { IMessageProps } from "../../model/types";

export function IncomingMessage({}: IMessageProps) {
  return (
    <div className={style.container}>
      <SvgMessageTail
        width={28}
        height={18}
        fill="currentColor"
        className={style.tail}
      />
    </div>
  );
}
