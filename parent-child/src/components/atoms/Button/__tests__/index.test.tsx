import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '..'; // Adjust the import path according to your project structure
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders the button with correct text', () => {
    const { container } = render(<Button>Click Me</Button>);
    
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('applies the correct styles based on props', () => {
    const { container } = render(<Button disabled>Click Me</Button>);
    
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(<Button onClick={handleClick}>Click Me</Button>);
    
    const buttonElement = container.querySelector('button');
    buttonElement?.click(); // Directly invoke the click event

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
