import "./styles.scss";

import type { FC } from "react";
import React from "react";

import type { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <button className={"button"} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
