import { render, screen } from "@testing-library/react";
import React from "react";

import type { OrderItem } from "types";
import { apiData } from "utils/api/data";

import { OrderItems } from ".";

describe("OrderItems", () => {
  const { products } = apiData;
  const items: OrderItem[] = [
    {
      id: 1,
      product: products[0],
      quantity: 2
    },
    {
      id: 3,
      product: products[1],
      quantity: 3
    }
  ];

  it("Display headers", () => {
    expect.assertions(4);

    render(<OrderItems items={[]} />);

    const productHeader = screen.getByText("Product");
    expect(productHeader).toBeInTheDocument();
    const unitPriceHeader = screen.getByText("Unit price");
    expect(unitPriceHeader).toBeInTheDocument();
    const quantityHeader = screen.getByText("Quantity");
    expect(quantityHeader).toBeInTheDocument();
    const totalPriceHeader = screen.getByText("Total price");
    expect(totalPriceHeader).toBeInTheDocument();
  });

  it("Display items", () => {
    expect.assertions(4 * items.length);

    render(<OrderItems items={items} />);

    items.forEach((item) => {
      const product = screen.getByText(item.product.name);
      expect(product).toBeInTheDocument();
      const unitPrice = screen.getByText(item.product.price);
      expect(unitPrice).toBeInTheDocument();
      const quantity = screen.getByText(item.quantity);
      expect(quantity).toBeInTheDocument();
      const totalPrice = screen.getByText(item.product.price * item.quantity);
      expect(totalPrice).toBeInTheDocument();
    });
  });
});
