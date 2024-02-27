import { BookedWrapper, TextInformation, Title } from './styles';
import { BookedCard } from '../BookedCard/BookedCard';
import {
  useEventContext,
  IBooking,
} from '@app/contexts/EventContext/EventContext';

export const Booked = () => {
  const { bookedEvents } = useEventContext();
  console.log({ bookedEvents });
  return (
    <BookedWrapper>
      <Title>Booked</Title>
      {bookedEvents.length > 0 ? (
        bookedEvents.map((book: IBooking) => (
          <BookedCard key={book.id} booking={book} />
        ))
      ) : (
        <TextInformation>
          <span>Booked events will be displayed here.</span>
        </TextInformation>
      )}
    </BookedWrapper>
  );
};
