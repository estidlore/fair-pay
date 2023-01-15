import "./styles.scss";

import type { FC } from "react";
import React from "react";

import type { SelectProps } from "./types";

const Select: FC<SelectProps> = ({
  children,
  name,
  onChange
}: SelectProps): JSX.Element => {
  return (
    <select className={"select"} name={name} onChange={onChange}>
      {children}
    </select>
  );
};

export { Select };
