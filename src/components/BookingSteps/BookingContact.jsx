import React, { useState } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import './BookingSteps.css';

    const BookingContact = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const { formData } = location.state || {};
      const [name, setName] = useState(formData?.name || '');
      const [email, setEmail] = useState(formData?.email || '');
      const [phone, setPhone] = useState(formData?.phone || '');
      const [message, setMessage] = useState(formData?.message || '');

      const handleNext = () => {
        navigate('/booking/confirm', { state: { ...formData, name, email, phone, message } });
      };

      return (
        <div className="booking-step">
          <h2>Kontaktdaten</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
            required
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="contact-input"
            required
          />
          <textarea
            placeholder="Nachricht"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-textarea"
          />
          <button onClick={handleNext}>Weiter</button>
        </div>
      );
    };

    export default BookingContact;
