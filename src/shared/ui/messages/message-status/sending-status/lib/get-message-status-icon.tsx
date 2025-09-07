import { SvgCheck18Pt } from "@shared/assets/icons/components/message-status/check-18pt";
import { SvgDoubleCheck18Pt } from "@shared/assets/icons/components/message-status/double-check-18pt";
import { SvgUploading18Pt } from "@shared/assets/icons/components/message-status/uploading-18pt";
import { IMessageStatus } from "@shared/types/message";
import { ComponentType, SVGProps } from "react";

const statuses: Record<
  IMessageStatus,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  sending: SvgUploading18Pt,
  delivered: SvgCheck18Pt,
  checked: SvgDoubleCheck18Pt,
};

export const getMessageStatusIcon = (status: IMessageStatus) =>
  statuses[status];
