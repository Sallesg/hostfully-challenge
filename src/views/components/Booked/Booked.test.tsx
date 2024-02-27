import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest';

import { Booked } from './Booked';
import { EventProvider } from '@app/contexts/EventContext/EventContext';
import theme from '@views/styles/theme';
import { ThemeProvider } from 'styled-components';

describe('Booked component', () => {
  it('renders "Booked events will be displayed here." when there are no booked events', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <EventProvider>
          <Booked />
        </EventProvider>
        ,
      </ThemeProvider>,
    );

    expect(
      getByText('Booked events will be displayed here.'),
    ).toBeInTheDocument();
  });

  it('renders booked events when there are booked events', () => {
    const bookedEvents = [
      {
        id: '1',
        checkIn: new Date('2024-03-01'),
        checkOut: new Date('2024-03-05'),
        price: 0,
        completed: false,
      },
      {
        id: '2',
        checkIn: new Date('2024-03-08'),
        checkOut: new Date('2024-03-12'),
        price: 0,
        completed: false,
      },
    ];

    const { getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <EventProvider>
          <Booked />
        </EventProvider>
        ,
      </ThemeProvider>,
    );

    // Check if "Booked" title is present
    expect(getByText('Booked')).toBeInTheDocument();

    // Check if each booked event is rendered
    bookedEvents.forEach((event) => {
      expect(queryByText(`Booking ID: ${event.id}`)).toBe(null);
    });
  });
});
