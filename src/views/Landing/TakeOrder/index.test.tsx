import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { TakeOrder } from ".";

describe("TakeOrder", () => {
  it("Display content", () => {
    expect.assertions(2);
    const onCancel = jest.fn();

    render(<TakeOrder onCancel={onCancel} />);

    const customerLabel = screen.queryByText("Customer");
    expect(customerLabel).toBeInTheDocument();
    const customerInput = screen.queryByPlaceholderText("John Doe");
    expect(customerInput).toBeInTheDocument();
  });

  it("Cancel order", () => {
    expect.assertions(1);
    const onCancel = jest.fn();

    render(<TakeOrder onCancel={onCancel} />);

    const cancelButton = screen.getByText("Cancel order");
    fireEvent.click(cancelButton);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
