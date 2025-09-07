import clsx from "clsx";
import { getMessageStatusIcon } from "../../lib/get-message-status-icon";
import { IMessageStatusIconProps } from "../../model/types";
import style from "./style.module.css";

export function MessageSendingStatus({
  status,
  contrast,
  className,
}: IMessageStatusIconProps) {
  const StatusIcon = getMessageStatusIcon(status);

  return (
    <i className={clsx(style.icon, contrast && style.iconContrast, className)}>
      <StatusIcon
        className={clsx(style.icon, contrast && style.iconContrast, className)}
        width={18}
        height={18}
      />
    </i>
  );
}
