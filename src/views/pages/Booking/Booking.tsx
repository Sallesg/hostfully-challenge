import { Booked } from '@views/components/Booked/Booked';
import { Wrapper, WrapperBooking } from './styles.tsx';
import { EventBookingForm } from '@views/components/EventBookingForm/EventBookingForm.tsx';
import { EventProvider } from '@app/contexts/EventContext/EventContext.tsx';
import { Property } from '@views/components/property/Property.tsx';

export const Booking = () => {
  return (
    <EventProvider>
      <Wrapper>
        <Property />
        <WrapperBooking>
          <EventBookingForm />
          <Booked />
        </WrapperBooking>
      </Wrapper>
    </EventProvider>
  );
};
