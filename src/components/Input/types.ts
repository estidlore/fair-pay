import type { InputHTMLAttributes } from "react";

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "onChange" | "placeholder" | "type" | "value"
>;

export type { InputProps };
