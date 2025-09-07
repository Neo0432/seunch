import { SvgMessageTail } from "@shared/assets/icons/components/message-tails/message-tail";
import { MessageBubble } from "@shared/ui/messages/message-bubble";
import style from "./style.module.css";
import { IMessageWithTailProps } from "../../model/types";
import clsx from "clsx";
import { getGroupMessageTypeStyles } from "../../lib/get-group-message-type-styles";
import { MessageTail } from "../message-tail";
import { MessageStatusContainer } from "../status-container";

export function MessageWithTail({
  sender,
  type = "lonely",
  tailContainerClassName,
  className,
  messageStatus,
  ...messageBubbleProps
}: IMessageWithTailProps) {
  return (
    <MessageStatusContainer sender={sender} messageStatus={messageStatus}>
      <div
        className={clsx(
          style.containerTail,
          sender === "me" ? style.containerTailRight : style.containerTailLeft,
        )}
      >
        <MessageBubble
          {...messageBubbleProps}
          className={clsx(
            sender === "me" ? style.bubbleMe! : style.bubbleInterlocutor,
            getGroupMessageTypeStyles(sender, type),
            className,
          )}
        />
        <MessageTail sender={sender} type={type} />
      </div>
    </MessageStatusContainer>
  );
}
