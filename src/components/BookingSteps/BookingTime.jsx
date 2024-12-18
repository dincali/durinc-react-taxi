import React, { useState } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import './BookingSteps.css';

    const BookingTime = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const { formData } = location.state || {};
      const [time, setTime] = useState(formData?.time || '');

      const handleTimeChange = (e) => {
        setTime(e.target.value);
      };

      const handleNext = () => {
        navigate('/booking/contact', { state: { ...formData, time } });
      };

      return (
        <div className="booking-step">
          <h2>Uhrzeit wählen</h2>
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="time-input"
          />
          <button onClick={handleNext}>Weiter</button>
        </div>
      );
    };

    export default BookingTime;
