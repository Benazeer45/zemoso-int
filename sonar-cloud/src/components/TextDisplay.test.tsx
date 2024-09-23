import React from "react";
import { render, screen } from "@testing-library/react";
import TextDisplay from "./TextDisplay";

test("renders the TextDisplay component with the correct text", () => {
  const sampleText = "Hello, World!";
  render(<TextDisplay text={sampleText} />);
  
  const textElement = screen.getByText(sampleText);
  expect(textElement).toBeInTheDocument();
});
