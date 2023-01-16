import "./styles.scss";

import type { FC } from "react";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Input } from "components/Input";
import type { OrderItem, Product } from "types";
import { fetchApi } from "utils/api";
import { isEmpty, validateEmpty } from "utils/form/text";
import { useArrayReducer } from "utils/hooks/arrayReducer";

import { TableContext } from "..";
import { AddItem } from "../AddItem";
import { OrderItems } from "../OrderItems";
import type { TakeOrderProps } from "./types";

const TakeOrder: FC<TakeOrderProps> = ({
  onCancel
}: TakeOrderProps): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productOptions, setProductOptions] = useState<Product[]>([]);
  const [items, addItem] = useArrayReducer<OrderItem>([]);

  const [customer, setCustomer] = useState("");

  const { addOrder, orders } = useContext(TableContext);

  useEffect(() => {
    const options = products.filter((product) => {
      return items.filter((item) => item.id === product.id).length === 0;
    });
    setProductOptions(options);
  }, [items, products, setProductOptions]);

  useEffect(() => {
    fetchApi("products")
      .then(async (res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProducts]);

  const handleSave = useCallback(() => {
    const customerValidation = validateEmpty(customer);
    if (!isEmpty(customerValidation)) {
      alert("Customer " + customerValidation);
      return;
    }
    const customerOldOrder = orders.findIndex(
      (order) => order.customer === customer
    );
    if (customerOldOrder !== -1) {
      alert("Customer names cannot be repeated");
      return;
    }
    if (items.length === 0) {
      alert("Order cannot be empty");
      return;
    }
    addOrder?.({
      customer,
      id: orders.length + 1,
      items,
      tip: 0
    });
  }, [addOrder, customer, items, orders]);

  return (
    <Card
      actionButtons={
        <Fragment>
          <Button onClick={handleSave}>{"Save order"}</Button>
          <Button onClick={onCancel}>{"Cancel order"}</Button>
        </Fragment>
      }
      className={"take-order"}
      header={"Take an order"}
    >
      <div className={"form-control"}>
        <label htmlFor={"customer"}>{"Customer"}</label>
        <Input
          name={"customer"}
          onChange={setCustomer}
          placeholder={"John Doe"}
          type={"text"}
          value={customer}
        />
      </div>
      <OrderItems items={items} />
      <hr />
      <AddItem onAddItem={addItem} options={productOptions} />
    </Card>
  );
};

export { TakeOrder };
