import "./styles.scss";

import type { FC } from "react";
import { createContext } from "react";
import React from "react";

import { Select } from "components/Select";
import { useArrayReducer } from "utils/hooks/arrayReducer";

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

  return (
    <div>
      <TableContext.Provider
        value={{
          addOrder,
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
      </TableContext.Provider>
    </div>
  );
};

export { Landing, TableContext };
