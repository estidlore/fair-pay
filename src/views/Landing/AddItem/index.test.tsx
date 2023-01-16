import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { apiData } from "utils/api/data";

import { AddItem } from ".";

describe("AddItem", () => {
  const { products } = apiData;

  it("Display select options and input", () => {
    expect.assertions(products.length + 1);
    const onAddItem = jest.fn();

    render(<AddItem onAddItem={onAddItem} options={products} />);

    products.forEach(({ name }) => {
      const option = screen.getByText(name);
      expect(option).toBeInTheDocument();
    });

    const quantityInput = screen.getByPlaceholderText("Quantity");
    expect(quantityInput).toBeInTheDocument();
  });

  it("Render null if empty options", () => {
    expect.assertions(2);
    const onAddItem = jest.fn();

    render(<AddItem onAddItem={onAddItem} options={[]} />);

    const quantityInput = screen.queryByPlaceholderText("Quantity");
    expect(quantityInput).not.toBeInTheDocument();
    const addButton = screen.queryByPlaceholderText("+");
    expect(addButton).not.toBeInTheDocument();
  });

  it("Add item", () => {
    expect.assertions(1);
    const onAddItem = jest.fn();

    render(<AddItem onAddItem={onAddItem} options={products} />);

    const addButton = screen.getByText("+");
    fireEvent.click(addButton);
    expect(onAddItem).toHaveBeenCalledTimes(1);
  });
});
