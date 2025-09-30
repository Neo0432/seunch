import { IMessageStatus } from "@shared/types/message";
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
