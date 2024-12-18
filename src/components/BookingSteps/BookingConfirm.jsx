import React from 'react';
    import { useLocation } from 'react-router-dom';
    import './BookingSteps.css';

    const BookingConfirm = () => {
      const location = useLocation();
      const { formData } = location.state || {};

      return (
        <div className="booking-step">
          <h2>Buchung bestätigen</h2>
          <p>Bitte überprüfen Sie Ihre Angaben:</p>
          <div className="confirmation-details">
            <p><strong>Datum:</strong> {formData?.date?.toLocaleDateString()}</p>
            <p><strong>Uhrzeit:</strong> {formData?.time}</p>
            <p><strong>Name:</strong> {formData?.name}</p>
            <p><strong>Email:</strong> {formData?.email}</p>
            <p><strong>Telefon:</strong> {formData?.phone}</p>
            <p><strong>Nachricht:</strong> {formData?.message}</p>
          </div>
          <button>Buchen</button>
        </div>
      );
    };

    export default BookingConfirm;
