import { differenceInDays } from 'date-fns';

export const calculateTotalPrice = (
  checkIn: Date | string,
  checkOut: Date | string,
  PriceData: number,
) => {
  if (checkIn && checkOut) {
    const diffDays = differenceInDays(checkOut, checkIn);
    const totalPrice = diffDays * PriceData;
    const formattedPrice = totalPrice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    return formattedPrice;
  }
};
