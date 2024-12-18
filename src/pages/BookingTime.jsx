import React, { useState } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import '../App.css';
    import { motion } from 'framer-motion';

    function BookingTime() {
      const [time, setTime] = useState('');
      const navigate = useNavigate();
      const location = useLocation();
      const { date } = location.state || {};

      const handleTimeChange = (e) => {
        setTime(e.target.value);
      };

      const handleNext = () => {
        navigate('/booking/details', { state: { date, time } });
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
              <a href="/" className="logo">Taxi Stuttgart</a>
            </nav>
          </header>
          <main>
            <section>
              <h2>Wählen Sie Ihre Uhrzeit</h2>
              <input type="time" value={time} onChange={handleTimeChange} />
              <motion.button
                className="book-button"
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Weiter
              </motion.button>
            </section>
          </main>
          <footer>
            <p>&copy; 2024 Taxi Stuttgart</p>
          </footer>
        </motion.div>
      );
    }

    export default BookingTime;
