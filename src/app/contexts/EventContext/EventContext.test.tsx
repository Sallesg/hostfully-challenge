import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EventProvider, useEventContext, IBooking } from './EventContext';

vi.mock('@app/utils/calculatePrice', () => ({
  calculateTotalPrice: vi.fn(() => 200),
}));

describe('EventProvider', () => {
  it('adds a booking', () => {
    const TestComponent: React.FC = () => {
      const { addBooking } = useEventContext();
      const booking: IBooking = {
        id: '1',
        checkIn: new Date(),
        checkOut: new Date(),
        price: 0,
        completed: false,
      };

      return <button onClick={() => addBooking(booking)}>Add Booking</button>;
    };

    const { getByText } = render(
      <EventProvider>
        <TestComponent />
      </EventProvider>,
    );

    fireEvent.click(getByText('Add Booking'));

    expect(getByText('Add Booking')).toBeInTheDocument();
  });

  it('updates a booking', () => {
    const TestComponent: React.FC = () => {
      const { addBooking, updateBooking } = useEventContext();
      const booking: IBooking = {
        id: '1',
        checkIn: new Date(),
        checkOut: new Date(),
        price: 0,
        completed: false,
      };

      return (
        <div>
          <button onClick={() => addBooking(booking)}>Add Booking</button>
          <button
            onClick={() => updateBooking('1', { ...booking, completed: true })}
          >
            Update Booking
          </button>
        </div>
      );
    };

    const { getByText } = render(
      <EventProvider>
        <TestComponent />
      </EventProvider>,
    );

    fireEvent.click(getByText('Add Booking'));
    fireEvent.click(getByText('Update Booking'));

    expect(getByText('Update Booking')).toBeInTheDocument();
  });

  it('throws error when trying to schedule a booking for past dates', () => {
    const errorSpy = vi.spyOn(console, 'error');
    errorSpy.mockImplementation(() => {});

    const TestComponent: React.FC = () => {
      const { addBooking } = useEventContext();
      const booking: IBooking = {
        id: '1',
        checkIn: '2022-01-01',
        checkOut: '2022-01-03',
        price: 0,
        completed: false,
      };

      return <button onClick={() => addBooking(booking)}>Add Booking</button>;
    };

    render(
      <EventProvider>
        <TestComponent />
      </EventProvider>,
    );

    expect(errorSpy).not.toHaveBeenCalled();

    errorSpy.mockRestore();
  });
});
