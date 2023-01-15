import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Button } from ".";

describe("Button", () => {
  it("Display content", () => {
    expect.assertions(1);

    render(<Button>{"Click me"}</Button>);

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("Fire onClick", () => {
    expect.assertions(1);
    const onClick = jest.fn();

    render(<Button onClick={onClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });

  it("Be disabled", () => {
    expect.assertions(2);
    const onClick = jest.fn();

    render(<Button disabled={true} onClick={onClick} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(0);
  });
});
