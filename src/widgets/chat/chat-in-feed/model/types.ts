import { IMessageStatus, ISender } from "@shared/types/message";
import { ReactNode } from "react";

export interface IChatInFeedHeaderProps {
  username: string;
  lastMessageTime: string;
  messageStatus?: IMessageStatus;
}

export interface IChatInFeedMessageProps {
  message: string;
  rightContent?: ReactNode;
}

export interface IChatInFeedProps
  extends IChatInFeedHeaderProps,
    IChatInFeedMessageProps {
  isChatPinned?: boolean;
  lastMessageSender?: ISender;
  unreadMessagesCount?: number;
}
