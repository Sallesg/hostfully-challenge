import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Booking } from './Booking';
import theme from '@views/styles/theme';
import { ThemeProvider } from 'styled-components';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <Booking />
    </ThemeProvider>,
  );

describe('Booking', () => {
  renderComponent();

  it('Should be render the Booking page', () => {
    // Ensure Property component is rendered
    const propertyElement = screen.getByRole('heading', {
      name: /Bungalow Sol/i,
    });
    expect(propertyElement).toBeInTheDocument();

    // Ensure Booked component is rendered
    const bookedElement = screen.getByRole('heading', { name: /Booked/i });
    expect(bookedElement).toBeInTheDocument();
  });
});
