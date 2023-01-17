import "./styles.scss";

import type { FC } from "react";
import React, { useCallback, useContext, useState } from "react";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Input } from "components/Input";
import { getSubtotalPrice, splitOrdersByApproval } from "utils/orders";

import { TableContext } from "..";
import { OrderItems } from "../OrderItems";

const Orders: FC = (): JSX.Element => {
  const { editOrder, orders } = useContext(TableContext);

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
        ordersToApprove.map(({ customer, id, items }) => {
          const [tip, setTip] = useState(0);

          const handleTipChange = useCallback(
            (newValue: string) => {
              setTip(parseInt(newValue));
            },
            [setTip]
          );

          const handleApprove = useCallback(() => {
            editOrder?.({
              approved: true,
              customer,
              id,
              items,
              tip
            });
          }, [customer, editOrder, id, items, tip]);

          return (
            <Card
              actionButtons={
                <Button onClick={handleApprove}>{"Generate check"}</Button>
              }
              header={`${customer}'s order`}
              key={id}
            >
              <OrderItems items={items} />
              <div className={"form-control"}>
                <label>{"Tip"}</label>
                <Input
                  name={"tip"}
                  onChange={handleTipChange}
                  placeholder={"tip"}
                  type={"number"}
                  value={tip}
                />
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
};

export { Orders };
