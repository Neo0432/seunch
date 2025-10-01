import { Avatar } from "@shared/ui/avatar/avatar";
import { ChatInFeedHeader } from "../header";
import { ChatInFeedMessage } from "../message";
import style from "./style.module.scss";
import { IChatInFeedProps } from "../../model/types";

export function ChatInFeed({
  username,
  messageStatus,
  lastMessageTime,
  message,
  rightContent,

  isChatPinned,
  lastMessageSender,
  unreadMessagesCount,
}: IChatInFeedProps) {
  return (
    <div className={style.chat}>
      <Avatar size="large" src="" />
      <div className={style.content}>
        <ChatInFeedHeader
          username={username}
          lastMessageTime={lastMessageTime}
          messageStatus={messageStatus}
        />
        <ChatInFeedMessage message={message} rightContent={rightContent} />
      </div>
    </div>
  );
}
