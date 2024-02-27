import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, Mock } from 'vitest';
import { BookedCard } from './BookedCard';
import {
  useEventContext,
  EventContextType,
} from '@app/contexts/EventContext/EventContext';

vi.mock('@app/contexts/EventContext/EventContext');

const mockContextValue: Partial<EventContextType> = {
  deleteBooking: vi.fn(),
  updateBooking: vi.fn(),
};

describe('BookedCard', () => {
  const mockBooking = {
    id: '1',
    checkIn: new Date('2024-03-01T12:00:00Z'),
    checkOut: new Date('2024-03-05T12:00:00Z'),
    price: 100,
    completed: false,
  };

  beforeEach(() => {
    // Mock context functions
    (useEventContext as Mock).mockReturnValue(mockContextValue);
  });

  it('should render the booked card with correct initial data', () => {
    render(<BookedCard booking={mockBooking} />);

    expect(screen.getByText('Period:')).toBeInTheDocument();
    expect(screen.getByText('Total Price:')).toBeInTheDocument();
    expect(screen.getByText(/03\/01\/2024/)).toBeInTheDocument();
    expect(screen.getByText(/03\/05\/2024/)).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('displays delete dialog on delete button click', () => {
    render(<BookedCard booking={mockBooking} />);

    const deleteButton = screen.getByRole('button-delete');
    fireEvent.click(deleteButton);

    expect(
      screen.getByText(/Are you sure you want to delete this event?/i),
    ).toBeInTheDocument();
  });

  it('displays delete dialog on delete button click', () => {
    render(<BookedCard booking={mockBooking} />);

    const saveButton = screen.getByRole('button-save');
    fireEvent.click(saveButton);

    const confirmEdit = screen.getByRole('button-confirm-edit');
    expect(confirmEdit).toBeInTheDocument();
  });
});
