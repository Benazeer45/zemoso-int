// src/components/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    const { getByText } = render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = getByText('Click Me');
    
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Click Me" onClick={handleClick} />);
    
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
