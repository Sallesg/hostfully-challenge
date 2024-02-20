import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Booking } from './Booking';

const renderComponent = () => render(<Booking />);

describe('Booking', () => {
  renderComponent();

  it('Should be render the Booking page', () => {
    const text = screen.getByText('Booking');
    expect(text).toBeInTheDocument();
  });
});
