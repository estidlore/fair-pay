import "./styles.scss";

import type { ChangeEvent, FC } from "react";
import { useCallback, useState } from "react";
import React from "react";

import type { SelectProps } from "./types";

const Select: FC<SelectProps> = ({
  children,
  name,
  onChange,
  value = ""
}: SelectProps): JSX.Element => {
  const [controlledValue, setControlledValue] = useState(value);

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(ev);
      setControlledValue(ev.target.value);
    },
    [onChange, setControlledValue]
  );

  return (
    <select
      className={"select"}
      name={name}
      onChange={handleChange}
      value={controlledValue}
    >
      {children}
    </select>
  );
};

export { Select };
