import { getMessageStatusIcon } from "@shared/libs/get-message-status-icon";
import { IChatInFeedHeaderProps } from "../../model/types";
import style from "./style.module.scss";

export function ChatInFeedHeader({
  lastMessageTime,
  username,
  messageStatus,
}: IChatInFeedHeaderProps) {
  return (
    <div className={style.header}>
      <p>{username}</p>
      <div className={style.statusesContainer}>
        {messageStatus && getMessageStatusIcon(messageStatus)()}
        <p>{lastMessageTime}</p>
      </div>
    </div>
  );
}
