import { calculateTotalPrice } from '@app/utils/calculatePrice';
import React, { ReactNode, createContext, useContext, useReducer } from 'react';

export interface IBooking {
  id: string;
  checkIn: Date | string;
  checkOut: Date | string;
  price: number | string;
  completed: boolean;
}

type Action =
  | { type: 'ADD_BOOKING'; booking: IBooking }
  | { type: 'UPDATE_BOOKING'; id: string; booking: IBooking }
  | { type: 'DELETE_BOOKING'; id: string };

const reducer = (state: IBooking[], action: Action): IBooking[] => {
  switch (action.type) {
    case 'ADD_BOOKING':
      return [...state, action.booking];
    case 'UPDATE_BOOKING':
      return state.map((booking) =>
        booking.id === action.id ? { ...action.booking } : booking,
      );
    case 'DELETE_BOOKING':
      return state.filter((booking) => booking.id !== action.id);
    default:
      return state;
  }
};

export type isEventConflict = (event: IBooking) => boolean;

export interface EventContextType {
  bookedEvents: IBooking[];
  addBooking: (booking: IBooking) => void;
  updateBooking: (id: string, booking: IBooking) => void;
  deleteBooking: (id: string) => void;
  checkBookingConflict: isEventConflict;
  PricePerDay: number;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};

export const EventProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookedEvents, dispatch] = useReducer(reducer, []);
  const PricePerDay = 145;
  const addBooking = (booking: IBooking) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (booking.checkIn < today) {
      throw new Error("You can't schedule a booking for past dates.");
    }

    const totalPrice = calculateTotalPrice(
      booking.checkIn,
      booking.checkOut,
      PricePerDay,
    );
    const newEvent = {
      ...booking,
      price: totalPrice!,
    };
    dispatch({ type: 'ADD_BOOKING', booking: newEvent });
  };

  const updateBooking = (id: string, booking: IBooking) => {
    dispatch({ type: 'UPDATE_BOOKING', id, booking });
  };

  const deleteBooking = (id: string) => {
    dispatch({ type: 'DELETE_BOOKING', id });
  };

  const checkBookingConflict: isEventConflict = (newEvent: IBooking) => {
    for (const event of bookedEvents) {
      if (
        (newEvent.checkIn >= event.checkIn &&
          newEvent.checkIn <= event.checkOut) ||
        (newEvent.checkOut >= event.checkIn &&
          newEvent.checkOut <= event.checkOut)
      ) {
        return true;
      }
    }
    return false;
  };

  const contextValue: EventContextType = {
    bookedEvents,
    addBooking,
    updateBooking,
    deleteBooking,
    checkBookingConflict,
    PricePerDay,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
