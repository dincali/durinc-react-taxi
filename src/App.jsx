import React from 'react';
    import { FaPhone, FaEnvelope, FaCar, FaClock, FaUsers, FaRoad } from 'react-icons/fa';
    import { motion } from 'framer-motion';
    import CountUp from 'react-countup';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import BookingForm from './components/BookingForm/BookingForm';
    import BookingDate from './components/BookingSteps/BookingDate';
    import BookingTime from './components/BookingSteps/BookingTime';
    import BookingContact from './components/BookingSteps/BookingContact';
    import BookingConfirm from './components/BookingSteps/BookingConfirm';
    import './App.css';

    function App() {
      const stats = [
        { icon: <FaCar />, label: 'Fahrten', value: 1250, color: '#e0f7fa' },
        { icon: <FaUsers />, label: 'Kunden', value: 875, color: '#b2ebf2' },
        { icon: <FaRoad />, label: 'Kilometer', value: 15000, color: '#80deea' },
      ];

      return (
        <Router>
          <div className="container">
            <header>
              <nav>
                <a href="#home" className="logo">Taxi Stuttgart</a>
                <ul>
                  <li><a href="#about">Über uns</a></li>
                  <li><a href="#services">Leistungen</a></li>
                  <li><a href="#contact">Kontakt</a></li>
                </ul>
              </nav>
              <div className="banner">
                <h1>Taxi Stuttgart</h1>
                <p>Ihr zuverlässiger Partner für alle Fahrten.</p>
                <motion.button
                  className="book-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/booking">Jetzt buchen</a>
                </motion.button>
              </div>
            </header>
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <section id="about">
                      <h2>Über uns</h2>
                      <p>
                        Wir sind ein erfahrenes Taxiunternehmen in Stuttgart und bieten Ihnen
                        pünktliche und komfortable Fahrten.
                      </p>
                    </section>
                    <section id="services">
                      <h2>Leistungen</h2>
                      <div className="services-grid">
                        <motion.div
                          className="service-item"
                          whileHover={{ scale: 1.05, backgroundColor: '#fce4ec' }}
                        >
                          <FaCar className="service-icon" />
                          <h3>Flughafentransfer</h3>
                          <p>Bequemer Transfer zum und vom Flughafen.</p>
                        </motion.div>
                        <motion.div
                          className="service-item"
                          whileHover={{ scale: 1.05, backgroundColor: '#fce4ec' }}
                        >
                          <FaClock className="service-icon" />
                          <h3>Kurierfahrten</h3>
                          <p>Schnelle und zuverlässige Kurierfahrten.</p>
                        </motion.div>
                        <motion.div
                          className="service-item"
                          whileHover={{ scale: 1.05, backgroundColor: '#fce4ec' }}
                        >
                          <FaCar className="service-icon" />
                          <h3>Stadtfahrten</h3>
                          <p>Komfortable Fahrten innerhalb der Stadt.</p>
                        </motion.div>
                      </div>
                    </section>
                    <section id="stats">
                      <h2>Unsere Statistik</h2>
                      <div className="stats-grid">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{ backgroundColor: stat.color }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="stat-icon">{stat.icon}</span>
                            <h3>
                              <CountUp end={stat.value} duration={2} />
                            </h3>
                            <p>{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                    <section id="contact">
                      <h2>Kontakt</h2>
                      <p><FaPhone /> +49 711 1234567</p>
                      <p><FaEnvelope /> info@taxistuttgart.de</p>
                    </section>
                  </>
                } />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/booking/date" element={<BookingDate />} />
                <Route path="/booking/time" element={<BookingTime />} />
                <Route path="/booking/contact" element={<BookingContact />} />
                <Route path="/booking/confirm" element={<BookingConfirm />} />
              </Routes>
            </main>
            <footer>
              <p>&copy; 2024 Taxi Stuttgart</p>
            </footer>
          </div>
        </Router>
      );
    }

    export default App;
