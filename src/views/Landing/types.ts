import type { Customer, Table } from "types";

interface TableContextValue extends Table {
  addCustomer?: (customer: Customer) => void;
  deleteCustomer?: (customerId: number) => void;
  editCustomer?: (customer: Customer) => void;
}

export type { TableContextValue };
