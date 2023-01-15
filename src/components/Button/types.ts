import type { ButtonHTMLAttributes } from "react";

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "disabled" | "onClick"
>;

export type { ButtonProps };
