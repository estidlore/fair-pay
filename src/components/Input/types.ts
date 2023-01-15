import type { InputHTMLAttributes } from "react";

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "onChange" | "placeholder"
>;

export type { InputProps };
