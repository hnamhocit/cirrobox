"use client";

import Link, { LinkProps } from "next/link";
import { FC, memo, MouseEvent, ReactNode } from "react";

import { useRouterProgress } from "@/hooks";

// Gộp LinkProps với Anchor props (className, style, target...)
type ProgressLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

const ProgressLink: FC<ProgressLinkProps> = ({
  children,
  onClick,
  ...props
}) => {
  const { start } = useRouterProgress();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented) start();
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default memo(ProgressLink);
