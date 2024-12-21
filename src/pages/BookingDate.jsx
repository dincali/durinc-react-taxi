import React, { useState } from 'react';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import { useNavigate, Link } from 'react-router-dom';
    import '../App.css';
    import { motion } from 'framer-motion';

    function BookingDate() {
      const [date, setDate] = useState(new Date());
      const navigate = useNavigate();

      const onChange = (date) => {
        setDate(date);
      };

      const handleNext = () => {
        navigate('/booking/time', { state: { date } });
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
              <h2>Wählen Sie Ihr Datum</h2>
              <Calendar onChange={onChange} value={date} />
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
            <Link to="/impressum" className="text-white ms-2">Impressum</Link>
          </footer>
        </motion.div>
      );
    }

    export default BookingDate;
