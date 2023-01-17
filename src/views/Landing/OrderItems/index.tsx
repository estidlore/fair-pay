import "./styles.scss";

import type { FC } from "react";
import { Fragment } from "react";
import React from "react";

import { getSubtotalPrice } from "utils/orders";

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
      {items.length === 0 ? (
        <p className={"no-items"}>{"There are not items to show"}</p>
      ) : (
        <Fragment>
          {items.map(({ id, product, quantity }) => (
            <Fragment key={id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{quantity}</p>
              <p>{product.price * quantity}</p>
            </Fragment>
          ))}
          <p className={"header"}>{"Subtotal"}</p>
          <p>{getSubtotalPrice(items)}</p>
        </Fragment>
      )}
    </div>
  );
};

export { OrderItems };
