import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

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
    // TODO: UPDATE THIS TEST
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

    expect(getByText('Booked')).toBeInTheDocument();

    bookedEvents.forEach((event) => {
      expect(queryByText(`Booking ID: ${event.id}`)).toBe(null);
    });
  });
});
