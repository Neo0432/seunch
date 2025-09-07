import style from "../ui/message/style.module.css";
import { ISender } from "@shared/types/message";
import { IMessageType } from "@shared/types/message";

export function getGroupMessageTypeStyles(sender: ISender, type: IMessageType) {
  const prefix = sender === "me" ? "bubbleMe" : "bubbleInterlocutor";
  const map: Partial<Record<typeof type, string>> = {
    start: style[`${prefix}Start`],
    middle: style[`${prefix}Middle`],
    end: style[`${prefix}End`],
  };
  return map[type] ?? "";
}
