import "./styles.scss";

import type { FC } from "react";
import React from "react";

import type { InputProps } from "./types";

const Input: FC<InputProps> = ({
  name,
  onChange,
  placeholder
}: InputProps): JSX.Element => {
  return (
    <input
      className={"input"}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export { Input };
