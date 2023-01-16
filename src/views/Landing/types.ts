import type { Order, Table } from "types";

interface TableContextValue extends Table {
  addOrder?: (order: Order) => void;
  deleteOrder?: (orderId: number) => void;
  editOrder?: (order: Order) => void;
}

export type { TableContextValue };
