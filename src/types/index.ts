interface Customer {
  id: number;
  name: string;
  order: Order;
}

interface Order {
  items: OrderItem[];
  tip: number;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Table {
  customers: Customer[];
  id: number;
}

export type { Customer, Order, OrderItem, Product, Table };
