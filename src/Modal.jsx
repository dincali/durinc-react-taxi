import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import './Modal.css';

    const Modal = ({ isOpen, onClose, onSubmit, initialData }) => {
      const [formData, setFormData] = useState(initialData || {
        name: '',
        email: '',
        phone: '',
        message: '',
        date: new Date(),
        time: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleDateChange = (date) => {
        setFormData({ ...formData, date: date });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
      };

      if (!isOpen) return null;

      return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Taxi Buchung</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Calendar
                onChange={handleDateChange}
                value={formData.date}
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Nachricht"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="modal-buttons">
                <button type="submit">Buchen</button>
                <button type="button" onClick={onClose}>Abbrechen</button>
              </div>
            </form>
          </div>
        </div>,
        document.getElementById('modal-root')
      );
    };

    export default Modal;
