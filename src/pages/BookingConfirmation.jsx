import React from 'react';
    import { useLocation, useNavigate, Link } from 'react-router-dom';
    import '../App.css';
    import { motion } from 'framer-motion';
    import { addBooking } from '../db';

    function BookingConfirmation() {
      const location = useLocation();
      const navigate = useNavigate();
      const { date, time, name, email, phone, address, message } = location.state || {};

      const handleConfirm = async () => {
        try {
          await addBooking({ name, email, phone, date, time, message });
          alert('Buchung erfolgreich!');
          navigate('/');
        } catch (error) {
          console.error('Error saving booking:', error);
          alert('Failed to save booking.');
        }
      };

      return (
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header>
            <nav>
            <h2><a href="/" className="logo text-warning">Taxi Stuttgart</a></h2>
            </nav>
          </header>
          <main>
            <section>
              <h2>Buchung bestätigen?</h2>
              <p>Datum: {date ? new Date(date).toLocaleDateString() : 'Nicht angegeben'}</p>
              <p>Uhrzeit: {time || 'Nicht angegeben'}</p>
              <p>Name: {name || 'Nicht angegeben'}</p>
              <p>Email: {email || 'Nicht angegeben'}</p>
              <p>Telefon: {phone || 'Nicht angegeben'}</p>
              <p>Adresse: {address || 'Nicht angegeben'}</p>
              <p>Nachricht: {message || 'Nicht angegeben'}</p>
              <motion.button
                className="book-button"
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buchung bestätigen
              </motion.button>
            </section>
          </main>
          <footer>
            <p>&copy; 2024 Taxi Stuttgart</p>
            <Link to="/impressum" className="text-white ms-2">Impressum</Link>
          </footer>
        </motion.div>
      );
    }

    export default BookingConfirmation;
