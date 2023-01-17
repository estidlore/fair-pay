import "./styles.scss";

import type { FC } from "react";
import React, { createContext, useCallback, useReducer } from "react";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Select } from "components/Select";
import type { Order } from "types";
import { useArrayReducer } from "utils/hooks/arrayReducer";

import { OrderItems } from "./OrderItems";
import { TakeOrder } from "./TakeOrder";
import type { TableContextValue } from "./types";

const tableInitialValue: TableContextValue = {
  id: 1,
  orders: []
};

const TableContext = createContext(tableInitialValue);

const Landing: FC = (): JSX.Element => {
  const tables = Array.from({ length: 7 }, (_, i) => i + 1);

  const [orders, addOrder, deleteOrder, editOrder] = useArrayReducer(
    tableInitialValue.orders
  );
  const [takingOrder, toggleTakingOrder] = useReducer((val) => !val, false);

  const handleAddOrder = useCallback(
    (order: Order) => {
      addOrder(order);
      toggleTakingOrder();
    },
    [addOrder, toggleTakingOrder]
  );

  return (
    <div>
      <TableContext.Provider
        value={{
          addOrder: handleAddOrder,
          deleteOrder,
          editOrder,
          id: 1,
          orders
        }}
      >
        <div className={"table-select"}>
          <label htmlFor={"table"}>{"Table"}</label>
          <Select name={"table"}>
            {tables.map((table) => (
              <option key={table}>{table}</option>
            ))}
          </Select>
        </div>
        <div className={"orders"}>
          <p className={"header"}>{"Orders"}</p>
          {orders.length === 0 ? (
            <p>{"There are not orders currently"}</p>
          ) : (
            orders.map((order) => (
              <Card header={`${order.customer}'s order`} key={order.id}>
                <OrderItems items={order.items} />
              </Card>
            ))
          )}
        </div>
        <hr />
        {takingOrder ? (
          <TakeOrder onCancel={toggleTakingOrder} />
        ) : (
          <Button onClick={toggleTakingOrder}>{"Add order"}</Button>
        )}
      </TableContext.Provider>
    </div>
  );
};

export { Landing, TableContext };
