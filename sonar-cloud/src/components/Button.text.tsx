import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("renders the Button component", () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("Button is clickable", async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);
  await userEvent.click(buttonElement);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Button is disabled when disabled prop is passed", () => {
  render(<Button disabled>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeDisabled();
});
