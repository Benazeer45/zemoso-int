import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text from TextDisplay component', () => {
  render(<App />);
  
  const textElement = screen.getByText(/this is a simple text display component/i); // Match the new text
  expect(textElement).toBeInTheDocument(); // Check if the text is present
});
