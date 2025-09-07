import { IMessageStatus, IMessageType, ISender } from "@shared/types/message";
import { IMessageProps } from "../../message-bubble/model/types";

export interface IMessageWithTailProps extends IMessageProps {
  sender: ISender;
  messageStatus?: IMessageStatus;
  tailContainerClassName?: string;
}

export interface IMessageTailProps {
  type: IMessageType;
  sender: ISender;
}

export interface IStatusContainerProps {
  sender: ISender;
  messageStatus?: IMessageStatus;
}
