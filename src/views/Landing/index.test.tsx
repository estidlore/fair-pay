import { render, screen } from "@testing-library/react";
import React from "react";

import { Landing } from ".";

describe("TakeOrder", () => {
  it("Display content", () => {
    expect.assertions(2);

    render(<Landing />);

    const tableLabel = screen.queryByText("Table");
    expect(tableLabel).toBeInTheDocument();
    const addOrderButton = screen.queryByText("Add order");
    expect(addOrderButton).toBeInTheDocument();
  });
});
