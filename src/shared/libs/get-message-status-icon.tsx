import { SvgCheck18Pt } from "@shared/assets/icons/components/message-status/check-18pt";
import { SvgDoubleCheck18Pt } from "@shared/assets/icons/components/message-status/double-check-18pt";
import { SvgUploading18Pt } from "@shared/assets/icons/components/message-status/uploading-18pt";
import { IMessageStatus } from "@shared/types/message";
import { ReactNode } from "react";

const messageStatusIcons: Record<IMessageStatus, () => ReactNode> = {
  sending: () => <SvgUploading18Pt />,
  uploaded: () => <SvgCheck18Pt />,
  delivered: () => <SvgDoubleCheck18Pt />,
  checked: () => <SvgDoubleCheck18Pt />,
};

export function getMessageStatusIcon(status: IMessageStatus) {
  return messageStatusIcons[status];
}
