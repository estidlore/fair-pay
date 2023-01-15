import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {
  actionButtons?: ReactNode;
  header?: string;
}

export type { CardProps };
