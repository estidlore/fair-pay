import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Input } from ".";

describe("Input", () => {
  beforeEach(() => {
    render(<Input placeholder={"Full name"} />);
  });

  it("Display placeholder", () => {
    expect.assertions(1);

    const input = screen.getByPlaceholderText("Full name");
    expect(input).toBeInTheDocument();
  });

  it("Change value", async () => {
    expect.assertions(1);

    const input = screen.getByPlaceholderText("Full name");
    await userEvent.type(input, "John Doe");
    expect(input).toHaveValue("John Doe");
  });
});
