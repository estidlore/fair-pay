import "./styles.scss";

import type { FC } from "react";
import { Fragment } from "react";
import React from "react";

import type { OrderItemsProps } from "./types";

const OrderItems: FC<OrderItemsProps> = ({
  items
}: OrderItemsProps): JSX.Element => {
  return (
    <div className={"order-items"}>
      <p className={"header"}>{"Product"}</p>
      <p className={"header"}>{"Unit price"}</p>
      <p className={"header"}>{"Quantity"}</p>
      <p className={"header"}>{"Total price"}</p>
      {items.map((item) => {
        const { product } = item;

        return (
          <Fragment key={item.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{item.quantity}</p>
            <p>{product.price * item.quantity}</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export { OrderItems };
