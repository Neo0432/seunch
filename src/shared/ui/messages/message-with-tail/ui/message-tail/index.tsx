import { SvgMessageTail } from "@shared/assets/icons/components/message-tails/message-tail";
import { IMessageTailProps } from "../../model/types";
import style from "./style.module.css";
import clsx from "clsx";

export function MessageTail({ sender, type }: IMessageTailProps) {
  {
    if (type === "end" || type === "lonely")
      return (
        <SvgMessageTail
          width={28}
          height={17}
          className={clsx(
            style.tail,
            sender === "me" ? style.tailRight : style.tailLeft,
          )}
        />
      );
  }
}
