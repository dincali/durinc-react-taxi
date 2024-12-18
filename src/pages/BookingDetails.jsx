import React, { useState } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import '../App.css';
    import { motion } from 'framer-motion';

    function BookingDetails() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [address, setAddress] = useState('');
      const [message, setMessage] = useState('');
      const navigate = useNavigate();
      const location = useLocation();
      const { date, time } = location.state || {};

      const handleNext = () => {
        navigate('/booking/confirmation', { state: { date, time, name, email, phone, address, message } });
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
              <h2>Geben Sie Ihre Details ein</h2>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Adresse"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <textarea
                placeholder="Nachricht"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <motion.button
                className="book-button"
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bestätigen
              </motion.button>
            </section>
          </main>
          <footer>
            <p>&copy; 2024 Taxi Stuttgart</p>
          </footer>
        </motion.div>
      );
    }

    export default BookingDetails;
