import { EventCalendar } from '@views/components/EventCalendar/EventCalendar';
import { subDays } from 'date-fns';

export const Booking = () => {
  return (
    <div>
      <h2>Booking</h2>
      <EventCalendar
        events={[
          { date: subDays(new Date(), 1), title: 'Yesterday' },
          { date: new Date(), title: 'Today' },
          { date: subDays(new Date(), -1), title: 'Tomorrow' },
        ]}
      />
    </div>
  );
};
