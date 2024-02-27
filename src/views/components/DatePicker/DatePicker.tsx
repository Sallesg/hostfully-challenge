import React from 'react';
import { parseISO, format } from 'date-fns';

interface DatePickerProps {
  selectedDate: Date | string;
  onDateChange: (date: Date) => void;
  minDate?: Date | string;
}
export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate = new Date(),
  onDateChange,
  minDate,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const date = parseISO(value);
    onDateChange(date);
  };

  const formattedSelectedDate = selectedDate
    ? format(selectedDate, 'yyyy-MM-dd')
    : '';
  const formattedMinDate = minDate ? format(minDate, 'yyyy-MM-dd') : '';

  return (
    <input
      role="datepicker"
      type="date"
      value={formattedSelectedDate}
      onChange={handleInputChange}
      min={formattedMinDate}
    />
  );
};
