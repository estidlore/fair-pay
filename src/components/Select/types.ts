import type { SelectHTMLAttributes } from "react";

interface SelectProps
  extends Pick<
    SelectHTMLAttributes<HTMLSelectElement>,
    "children" | "name" | "value"
  > {
  onChange?: (newValue: string) => void;
}

export type { SelectProps };
