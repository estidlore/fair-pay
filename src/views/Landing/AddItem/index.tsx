import "./styles.scss";

import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Select } from "components/Select";
import { validateGreaterOrEqual } from "utils/form/number";
import { isEmpty } from "utils/form/text";

import type { AddItemProps } from "./types";

const AddItem: FC<AddItemProps> = ({
  onAddItem,
  options
}: AddItemProps): JSX.Element | null => {
  if (options.length === 0) {
    return null;
  }

  const [id, setId] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (options.length > 0) {
      setId(options[0].id);
    }
  }, [options, setId]);

  const handleChangeQuantity = useCallback(
    (newValue: string) => {
      setQuantity(parseInt(newValue));
    },
    [setQuantity]
  );

  const handleChangeProduct = useCallback(
    (newValue: string) => {
      setId(parseInt(newValue));
    },
    [setId]
  );

  const handleAddItem = useCallback(() => {
    const quantityValidation = validateGreaterOrEqual(quantity, 0);
    if (!isEmpty(quantityValidation)) {
      alert("Quantity " + quantityValidation);
      return;
    }
    const product = options.find((el) => el.id === id);
    if (product === undefined) {
      alert("Product not found");
      return;
    }
    onAddItem({
      id,
      product,
      quantity
    });
  }, [id, onAddItem, options, quantity]);

  return (
    <div className={"add-item"}>
      <div className={"form-control"}>
        <label htmlFor={"product"}>{"Product"}</label>
        <Select name={"product"} onChange={handleChangeProduct} value={id}>
          {options.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </div>
      <div className={"form-control"}>
        <label htmlFor={"quantity"}>{"Quantity"}</label>
        <Input
          name={"quantity"}
          onChange={handleChangeQuantity}
          placeholder={"Quantity"}
          type={"number"}
          value={quantity}
        />
      </div>
      <Button onClick={handleAddItem}>{"+"}</Button>
    </div>
  );
};

export { AddItem };
