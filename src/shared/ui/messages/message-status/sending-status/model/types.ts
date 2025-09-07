import { IMessageStatus } from "@shared/types/message";

export interface IMessageStatusIconProps {
  status: IMessageStatus;
  contrast?: boolean;
  className?: string;
}
