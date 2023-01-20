import type { FC } from "react";
import React, { useCallback, useContext, useState } from "react";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Input } from "components/Input";
import type { Order as OrderProps } from "types";

import { TableContext } from "..";
import { OrderItems } from "../OrderItems";

const Order: FC<OrderProps> = ({ customer, id, items }: OrderProps) => {
  const { editOrder } = useContext(TableContext);
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
};

export { Order };
