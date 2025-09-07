import { PropsWithChildren } from "react";
import { IStatusContainerProps } from "../../model/types";
import style from "./style.module.css";
import { MessageSendingStatus } from "@shared/ui/messages/message-status";

export function MessageStatusContainer({
  sender,
  messageStatus,
  children,
}: PropsWithChildren<IStatusContainerProps>) {
  return (
    <div className={style.statusContainer}>
      {messageStatus && sender === "me" && (
        <MessageSendingStatus status={messageStatus} />
      )}
      {children}
    </div>
  );
}
