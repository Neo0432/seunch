import type { SVGProps } from "react";
export const SvgMessageTail = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={17} fill="none" {...props}>
    <path
      d="M28 17H0L18 0C18 0 18.6366 7.82546 21.8909 12C23.7788 14.4218 24.9455 15 28 17Z"
      fill={props.fill}
    />
  </svg>
);
