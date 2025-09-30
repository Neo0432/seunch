// import classNames from 'classnames/bind';

import clsx from "clsx";
import { AvatarProps } from "../avatar";
import classes from "./avatar.module.scss";

// const cn = classNames.bind(classes);

type ClassesArgs = Pick<
  AvatarProps,
  "className" | "size" | "fallbackClassName"
>;

export const getClasses = ({
  className,
  size,
  fallbackClassName,
}: ClassesArgs) => {
  const cnRoot = clsx("avatar", `avatar--${size}`, className);

  const cnImage = clsx("avatar-image");

  const cnFallback = clsx(
    "avatar-fallback",
    `avatar-fallback--${size}`,
    fallbackClassName
  );

  return {
    cnRoot,
    cnImage,
    cnFallback,
  };
};
