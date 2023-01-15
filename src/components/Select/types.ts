import type { SelectHTMLAttributes } from "react";

type SelectProps = Pick<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children" | "name" | "onChange"
>;

export type { SelectProps };
