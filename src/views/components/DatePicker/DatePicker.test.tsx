import '@testing-library/jest-dom';
import { DatePicker } from './DatePicker';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest'; // Assuming DatePicker component is in the same directory

describe('DatePicker', () => {
  it('should call onDateChange with the selected date when input changes', () => {
    const onDateChangeMock = vi.fn();
    render(
      <DatePicker selectedDate={new Date()} onDateChange={onDateChangeMock} />,
    );

    const input = screen.getByRole('datepicker') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '2024-02-28' } });

    expect(onDateChangeMock).toHaveBeenCalledWith(
      new Date('2024-02-28T03:00:00Z'),
    );
  });

  it('should display the selected date in the input field', () => {
    const selectedDate = new Date('2024-02-28T00:00:00-0300');
    render(<DatePicker selectedDate={selectedDate} onDateChange={vi.fn()} />);

    const input = screen.getByRole('datepicker') as HTMLInputElement;
    expect(input.value).toBe('2024-02-28');
  });

  it('should display the min date in the input field', () => {
    const minDate = new Date('2024-02-01T00:00:00-0300');
    const { getByRole } = render(
      <DatePicker
        selectedDate={new Date()}
        onDateChange={vi.fn()}
        minDate={minDate}
      />,
    );

    screen.debug();
    const input = getByRole('datepicker');
    expect(input.getAttribute('min')).toBe('2024-02-01');
  });
});
