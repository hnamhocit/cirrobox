"use client";

import Link, { LinkProps } from "next/link";
import { FC, memo, MouseEvent } from "react";

import { useRouterProgress } from "@/hooks";

const ProgressLink: FC<LinkProps & { children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  const { start } = useRouterProgress();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) props.onClick(e);
    if (!e.defaultPrevented) start();
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default memo(ProgressLink);
