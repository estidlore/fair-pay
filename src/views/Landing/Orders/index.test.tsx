import { render, screen } from "@testing-library/react";
import React from "react";

import { Orders } from ".";

describe("Orders", () => {
  it("Display content", () => {
    expect.assertions(4);

    render(<Orders />);

    const checksHeader = screen.getByText("Checks");
    expect(checksHeader).toBeInTheDocument();
    const ordersHeader = screen.getByText("Orders");
    expect(ordersHeader).toBeInTheDocument();
    const checksFallback = screen.getByText("There are not checks currently");
    expect(checksFallback).toBeInTheDocument();
    const ordersFallback = screen.getByText("There are not orders currently");
    expect(ordersFallback).toBeInTheDocument();
  });
});
