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
  const handleClick = jest.fn(); // Mock function to track clicks
  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);
  
  // Simulate a click event using userEvent
  await userEvent.click(buttonElement);

  // Check if the click handler was called once
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Button is disabled when disabled prop is passed", () => {
  render(<Button disabled>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);

  // Check if the button is disabled
  expect(buttonElement).toBeDisabled();
});

test("Button renders with different variants and colors", () => {
  const { rerender } = render(
    <Button variant="contained" color="primary">
      Contained Primary
    </Button>
  );

  // Check if the button with the specific variant and color is in the document
  const buttonElement = screen.getByText(/contained primary/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("MuiButton-contained");
  expect(buttonElement).toHaveClass("MuiButton-colorPrimary");

  // Rerender with a different variant and color
  rerender(
    <Button variant="outlined" color="secondary">
      Outlined Secondary
    </Button>
  );

  const newButtonElement = screen.getByText(/outlined secondary/i);
  expect(newButtonElement).toBeInTheDocument();
  expect(newButtonElement).toHaveClass("MuiButton-outlined");
  expect(newButtonElement).toHaveClass("MuiButton-colorSecondary");
});
