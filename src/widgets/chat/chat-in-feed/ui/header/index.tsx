import { getMessageStatusIcon } from "@shared/libs/get-message-status-icon";
import { IChatInFeedHeaderProps } from "../../model/types";

export function ChatInFeedHeader({
  lastMessageTime,
  username,
  messageStatus,
}: IChatInFeedHeaderProps) {
  return (
    <div>
      <p>{username}</p>
      {messageStatus && getMessageStatusIcon(messageStatus)()}
      <p>{lastMessageTime}</p>
    </div>
  );
}
