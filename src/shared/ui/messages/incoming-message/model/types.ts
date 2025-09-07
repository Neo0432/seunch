type ISender = "me" | "interlocutor";
type IMessageType = "start" | "middle" | "end";

export interface IMessageProps {
  content: string;
  date: Date;
  sender: ISender;
  type?: IMessageType;

  className?: string;
}
