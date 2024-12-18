import React, { useState } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import './BookingSteps.css';

    const BookingDate = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const { formData } = location.state || {};
      const [date, setDate] = useState(formData?.date || new Date());

      const handleDateChange = (newDate) => {
        setDate(newDate);
      };

      const handleNext = () => {
        navigate('/booking/time', { state: { ...formData, date } });
      };

      return (
        <div className="booking-step">
          <h2>Datum wählen</h2>
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="custom-calendar"
          />
          <button onClick={handleNext}>Weiter</button>
        </div>
      );
    };

    export default BookingDate;
