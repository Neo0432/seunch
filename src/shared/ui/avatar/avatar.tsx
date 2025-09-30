import {
  Fallback as RadixAvatarFallback,
  Image as RadixAvatarImage,
  Root as RadixAvatarRoot,
} from "@radix-ui/react-avatar";
import { FC, ReactNode } from "react";
import { CommonTypes } from "@shared/types";

import { AvatarSize } from "./lib/types";
import { getClasses } from "./styles/get-classes";

export interface AvatarProps extends CommonTypes {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  fallbackClassName?: string;
}

export const Avatar: FC<AvatarProps> = ({
  className,
  size = "small",
  src,
  alt = "",
  fallback,
  fallbackClassName,
}) => {
  const { cnRoot, cnImage, cnFallback } = getClasses({
    className,
    size,
    fallbackClassName,
  });

  return (
    <RadixAvatarRoot className={cnRoot}>
      {src && <RadixAvatarImage className={cnImage} src={src} alt={alt} />}

      {fallback && (
        <RadixAvatarFallback className={cnFallback}>
          {fallback}
        </RadixAvatarFallback>
      )}
    </RadixAvatarRoot>
  );
};
