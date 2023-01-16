import type { HTMLAttributes, ReactNode } from "react";

interface CardProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children" | "className"> {
  actionButtons?: ReactNode;
  header?: string;
}

export type { CardProps };
