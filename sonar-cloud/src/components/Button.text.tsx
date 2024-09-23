// src/components/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers
import Button from './Button';

describe('Button Component', () => {
  it('renders with the correct label', () => {
    // Arrange
    const label = 'Click me';
    const mockOnClick = jest.fn(); // Mock the onClick function

    // Act
    render(<Button label={label} onClick={mockOnClick} />);

    // Assert
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    // Arrange
    const label = 'Submit';
    const mockOnClick = jest.fn();

    // Act
    render(<Button label={label} onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(buttonElement);

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1); // Check that the click handler was called exactly once
  });

  it('renders with different label texts', () => {
    const labels = ['Submit', 'Cancel', 'Reset'];
    const mockOnClick = jest.fn();

    labels.forEach((label) => {
      // Act
      render(<Button label={label} onClick={mockOnClick} />);
      const buttonElement = screen.getByRole('button', { name: label });
      
      // Assert
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
