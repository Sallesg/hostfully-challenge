import '@testing-library/jest-dom';
import { describe, expect, it, vi, afterEach, Mock } from 'vitest';
import { calculateTotalPrice } from './calculatePrice';
import { differenceInDays } from 'date-fns';

vi.mock('date-fns', () => ({
  differenceInDays: vi.fn(),
}));

describe('calculateTotalPrice', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should calculate total price correctly when both checkIn and checkOut are provided', () => {
    (differenceInDays as Mock).mockReturnValue(5);

    const checkIn = new Date('2022-01-01');
    const checkOut = new Date('2022-01-06');
    const priceData = 100;

    const totalPrice = calculateTotalPrice(checkIn, checkOut, priceData);

    expect(totalPrice).toBe('$500.00');
    expect(differenceInDays).toHaveBeenCalledWith(checkOut, checkIn);
  });

  it('should return undefined if checkIn or checkOut is not provided', () => {
    const checkIn = new Date('2022-01-01');
    const priceData = 100;

    let totalPrice = calculateTotalPrice(checkIn, '', priceData);
    expect(totalPrice).toBeUndefined();

    totalPrice = calculateTotalPrice('', new Date('2022-01-06'), priceData);
    expect(totalPrice).toBeUndefined();

    totalPrice = calculateTotalPrice('', '', priceData);
    expect(totalPrice).toBeUndefined();

    expect(differenceInDays).not.toHaveBeenCalled();
  });
});
