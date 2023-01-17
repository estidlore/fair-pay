import "./styles.scss";

import type { ChangeEvent, FC } from "react";
import React, { useCallback, useState } from "react";

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
      const newValue = ev.target.value;
      onChange?.(newValue);
      setControlledValue(newValue);
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
