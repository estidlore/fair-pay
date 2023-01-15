import { render, screen } from "@testing-library/react";
import React, { Fragment } from "react";

import { Button } from "components/Button";

import { Card } from ".";

describe("Card", () => {
  it("Display header and content", () => {
    expect.assertions(2);

    render(<Card header={"John's order"}>{"Order details"}</Card>);

    const header = screen.getByText("John's order");
    expect(header).toBeInTheDocument();
    const content = screen.getByText("Order details");
    expect(content).toBeInTheDocument();
  });

  it("Display action buttons", () => {
    expect.assertions(2);

    render(
      <Card
        actionButtons={
          <Fragment>
            <Button>{"Save"}</Button>
            <Button>{"Cancel"}</Button>
          </Fragment>
        }
      />
    );

    const button1 = screen.getByText("Save");
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByText("Cancel");
    expect(button2).toBeInTheDocument();
  });
});
