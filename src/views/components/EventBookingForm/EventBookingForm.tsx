import { useEventContext } from '@app/contexts/EventContext/EventContext';
import React, { useState } from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import {
  FormWrapper,
  InputWrapper,
  Title,
  Button,
  ButtonWrapper,
  FillBar,
  PriceText,
} from './styles';
import { calculateTotalPrice } from '@app/utils/calculatePrice';
import { differenceInCalendarDays } from 'date-fns';

export const EventBookingForm: React.FC = () => {
  const { addBooking, checkBookingConflict, PricePerDay } = useEventContext();
  const [checkIn, setCheckIn] = useState<Date | string>('');
  const [checkOut, setCheckOut] = useState<Date | string>('');
  const [validationSteps, setValidationSteps] = useState(0);

  const handlecheckInChange = (date: Date) => {
    setCheckIn(date);
    setValidationSteps(date && checkOut ? 2 : 1);
  };

  const handlecheckOutChange = (date: Date) => {
    setCheckOut(date);
    setValidationSteps(checkIn && date ? 2 : checkIn && date ? 2 : 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert('Please fill out all fields');
      return;
    }
    if (
      checkBookingConflict({
        id: '0',
        checkIn,
        checkOut,
        completed: false,
        price: 0,
      })
    ) {
      alert('Event conflicts with existing events');
      return;
    }
    addBooking({
      id: crypto.randomUUID(),
      checkIn,
      checkOut,
      completed: false,
      price: 0,
    });

    setCheckIn('');
    setCheckOut('');

    setValidationSteps(0);
  };

  return (
    <FormWrapper>
      <Title>Book Your Stay</Title>
      <form onSubmit={handleSubmit}>
        <PriceText>
          <small>Per day: ${PricePerDay.toFixed(2)} </small>
        </PriceText>
        <div>
          <InputWrapper>
            <label>Check In</label>
            <DatePicker
              selectedDate={checkIn}
              onDateChange={handlecheckInChange}
              minDate={new Date()}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Check Out</label>
            <DatePicker
              selectedDate={checkOut}
              onDateChange={handlecheckOutChange}
              minDate={checkIn || new Date()}
            />
          </InputWrapper>
          <PriceText>
            <p>
              {checkIn &&
                checkOut &&
                `Total Price: ${calculateTotalPrice(checkIn, checkOut, PricePerDay)}`}
            </p>
            {checkIn && checkOut && (
              <span>
                {differenceInCalendarDays(
                  new Date(checkOut),
                  new Date(checkIn),
                )}
              </span>
            )}
          </PriceText>
        </div>
        <ButtonWrapper steps={validationSteps}>
          <Button disabled={validationSteps < 2}>Book Event</Button>
          {validationSteps === 0 ? null : <FillBar steps={validationSteps} />}
        </ButtonWrapper>
      </form>
    </FormWrapper>
  );
};
