import { Routes, Route } from 'react-router-dom';
import { Booking } from '@views/pages/Booking/Booking';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Booking />} />
    </Routes>
  );
};
