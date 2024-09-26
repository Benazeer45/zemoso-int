import React from "react";
import { render, screen } from "@testing-library/react";
import TextDisplay from "..";
import '@testing-library/jest-dom';


test("renders the TextDisplay component with given text", () => {
  const testText = "Hello, World!";
  render(<TextDisplay text={testText} />); // Render the component with the test text

  const textElement = screen.getByText(testText); // Check for the presence of the text
  expect(textElement).toBeInTheDocument(); // Assert that the text is in the document
});
