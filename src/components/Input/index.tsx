import "./styles.scss";

import type { ChangeEvent, FC } from "react";
import { useCallback, useState } from "react";
import React from "react";

import type { InputProps } from "./types";

const Input: FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  type,
  value = ""
}: InputProps): JSX.Element => {
  const [controlledValue, setControlledValue] = useState(value);

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      onChange?.(ev);
      setControlledValue(ev.target.value);
    },
    [onChange, setControlledValue]
  );

  return (
    <input
      className={"input"}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={controlledValue}
    />
  );
};

export { Input };
