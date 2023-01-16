import type { InputHTMLAttributes } from "react";

interface InputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "name" | "placeholder" | "type" | "value"
  > {
  onChange?: (newValue: string) => void;
}

export type { InputProps };
