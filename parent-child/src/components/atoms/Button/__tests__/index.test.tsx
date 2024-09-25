// src/components/atoms/Button/__tests__/index.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extended matchers like toBeInTheDocument
import { ThemeProvider, createTheme } from '@mui/material/styles';
import userEvent from '@testing-library/user-event';
import { Button } from '..';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ffffff',
    },
    action: {
      disabledOpacity: 0.38,
    },
  },
  typography: {
    button: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
  it('renders the button with correct text', () => {
    const { getByRole } = renderWithTheme(<Button>Click Me</Button>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonElement = getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('applies the correct styles based on props', () => {
    const { getByRole } = renderWithTheme(<Button disabled>Click Me</Button>);
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonElement = getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle(`
      background-color: #1976d2;
      color: #1976d2;
      opacity: 0.38;
    `);
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    const { getByRole } = renderWithTheme(<Button onClick={handleClick}>Click Me</Button>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonElement = getByRole('button', { name: /click me/i });
    await userEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
