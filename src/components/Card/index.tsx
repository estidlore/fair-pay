import "./styles.scss";

import type { FC } from "react";
import React from "react";

import type { CardProps } from "./types";

const Card: FC<CardProps> = ({
  actionButtons,
  children,
  header
}: CardProps): JSX.Element => {
  return (
    <div className={"card"}>
      <p className={"header"}>{header}</p>
      {children}
      <div className={"actions"}>{actionButtons}</div>
    </div>
  );
};

export { Card };
