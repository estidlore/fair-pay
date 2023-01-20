import { render, screen } from "@testing-library/react";
import React from "react";

import type { Order as OrderProps } from "types";
import { apiData } from "utils/api/data";

import { Order } from "./Order";

describe("Order", () => {
  const { products } = apiData;
  const order: OrderProps = {
    approved: false,
    customer: "John Doe",
    id: 1,
    items: [
      {
        id: 1,
        product: products[0],
        quantity: 2
      },
      {
        id: 2,
        product: products[1],
        quantity: 3
      }
    ],
    tip: 2000
  };

  it("Display content", () => {
    expect.assertions(3);

    render(<Order {...order} />);

    const generateButton = screen.queryByText("Generate check");
    expect(generateButton).toBeInTheDocument();
    const tipLabel = screen.queryByText("Tip");
    expect(tipLabel).toBeInTheDocument();
    const tipInput = screen.queryByPlaceholderText("tip");
    expect(tipInput).toBeInTheDocument();
  });
});
