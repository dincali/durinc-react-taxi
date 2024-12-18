import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import './BookingForm.css';

    const BookingForm = () => {
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        date: null,
        time: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      const handleNext = (step) => {
        navigate(step, { state: { formData } });
      };

      return (
        <div className="booking-form">
          <h2>Taxi Buchung</h2>
          <p>Bitte wählen Sie das Datum für Ihre Fahrt.</p>
          <button onClick={() => handleNext('/booking/date')}>Datum wählen</button>
        </div>
      );
    };

    export default BookingForm;
