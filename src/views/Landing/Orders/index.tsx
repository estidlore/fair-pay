import "./styles.scss";

import type { FC } from "react";
import React, { useContext } from "react";

import { Card } from "components/Card";
import { getSubtotalPrice, splitOrdersByApproval } from "utils/orders";

import { TableContext } from "..";
import { OrderItems } from "../OrderItems";
import { Order } from "./Order";

const Orders: FC = (): JSX.Element => {
  const { orders } = useContext(TableContext);

  const [approvedOrders, ordersToApprove] = splitOrdersByApproval(orders);

  return (
    <div className={"orders"}>
      <p className={"header"}>{"Checks"}</p>
      {approvedOrders.length === 0 ? (
        <p>{"There are not checks currently"}</p>
      ) : (
        approvedOrders.map(({ customer, id, items, tip }) => {
          const subTotal = getSubtotalPrice(items);

          return (
            <Card header={`${customer}'s check`} key={id}>
              <OrderItems items={items} />
              <hr />
              <p className={"check-info"}>
                <span>{"Tip"}</span>
                <span>{tip}</span>
                <span>{"Total"}</span>
                <span>{subTotal + tip}</span>
              </p>
            </Card>
          );
        })
      )}
      <p className={"header"}>{"Orders"}</p>
      {ordersToApprove.length === 0 ? (
        <p>{"There are not orders currently"}</p>
      ) : (
        ordersToApprove.map((order) => <Order {...order} key={order.id} />)
      )}
    </div>
  );
};

export { Orders };
