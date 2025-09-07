import { IMessageType } from "@shared/types/message";

export interface IMessageProps {
  content: string;
  date: Date;
  type?: IMessageType;

  className?: string;
}
