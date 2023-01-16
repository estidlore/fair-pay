import "./styles.scss";

import type { FC } from "react";
import { createContext } from "react";
import React from "react";

import { Select } from "components/Select";
import { useArrayReducer } from "utils/hooks/arrayReducer";

import type { TableContextValue } from "./types";

const tableInitialValue: TableContextValue = {
  customers: [],
  id: 1
};

const TableContext = createContext(tableInitialValue);

const Landing: FC = (): JSX.Element => {
  const tables = Array.from({ length: 7 }, (_, i) => i + 1);

  const [customers, addCustomer, deleteCustomer, editCustomer] =
    useArrayReducer(tableInitialValue.customers);

  return (
    <div>
      <TableContext.Provider
        value={{
          addCustomer,
          customers,
          deleteCustomer,
          editCustomer,
          id: 1
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
