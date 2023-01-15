import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Select } from ".";

describe("Select", () => {
  beforeEach(() => {
    render(
      <Select>
        <option value={1}>{"Option 1"}</option>
        <option value={2}>{"Option 2"}</option>
      </Select>
    );
  });

  it("Display options", () => {
    expect.assertions(2);

    const option1 = screen.getByText("Option 1");
    expect(option1).toBeInTheDocument();
    const option2 = screen.getByText("Option 2");
    expect(option2).toBeInTheDocument();
  });

  it("Change value", async () => {
    expect.assertions(3);

    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "Option 2");
    expect(select).toHaveValue("2");

    const option1 = screen.getByText("Option 1");
    expect((option1 as HTMLOptionElement).selected).toBeFalsy();
    const option2 = screen.getByText("Option 2");
    expect((option2 as HTMLOptionElement).selected).toBeTruthy();
  });
});
