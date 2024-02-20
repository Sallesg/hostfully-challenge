interface IEvents {
  title: string;
  date: Date;
}

export const EventCalendar = ({ events }: { events: IEvents[] }) => {
  return (
    <div>
      <h1>Event Calendar</h1>
      {events.map((event) => (
        <div key={event.date.toISOString()}>
          <h2>{event.title}</h2>
          <p>{event.date.toISOString()}</p>
        </div>
      ))}
    </div>
  );
};
