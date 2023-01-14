import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./App";

describe("App", () => {
  it("Display header", () => {
    render(<App />);
    expect(screen.getByText("Fair Pay")).toBeInTheDocument();
  });
});
