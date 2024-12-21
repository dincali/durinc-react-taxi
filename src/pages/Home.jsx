import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaCar, FaClock, FaUsers, FaRoad, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home() {
  const stats = [
    { icon: <FaCar />, label: 'Fahrten', value: 1250, color: '#e0f7fa' },
    { icon: <FaUsers />, label: 'Kunden', value: 875, color: '#b2ebf2' },
    { icon: <FaRoad />, label: 'Kilometer', value: 15000, color: '#80deea' },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-black bg-black">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#home">Taxi Stuttgart</a>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon color-white"></span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">Über uns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#services">Leistungen</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contact">Kontakt</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="home-container">
        <div className="banner">
          <h1>Taxi Stuttgart</h1>
          <p>Ihr zuverlässiger Partner für alle Fahrten.</p>
          <motion.button
            className="btn btn-light book-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/booking/date" style={{ color: 'inherit', textDecoration: 'none' }}>
              Jetzt buchen
            </Link>
          </motion.button>
        </div>
      </div>
      <main className="container">
        <section id="about" className="my-5">
          <h2>Über uns</h2>
          <p>
            Wir sind ein erfahrenes Taxiunternehmen in Stuttgart und bieten Ihnen
            pünktliche und komfortable Fahrten.
          </p>
        </section>
        <section id="services" className="my-5">
          <h2>Leistungen</h2>
          <div className="row">
            <motion.div
              className="col-md-4 service-item"
              whileHover={{ scale: 1.05, backgroundColor: '#fce4ec' }}
            >
              <FaCar className="service-icon" />
              <h3>Flughafentransfer</h3>
              <p>Bequemer Transfer zum und vom Flughafen.</p>
            </motion.div>
            <motion.div
              className="col-md-4 service-item"
              whileHover={{ scale: 1.05, backgroundColor: '#fce4ec' }}
            >
              <FaClock className="service-icon" />
              <h3>Kurierfahrten</h3>
              <p>Schnelle und zuverlässige Kurierfahrten.</p>
            </motion.div>
            <motion.div
              className="col-md-4 service-item"
              whileHover={{ scale: 1.05, backgroundColor: '#fce4ec' }}
            >
              <FaCar className="service-icon" />
              <h3>Stadtfahrten</h3>
              <p>Komfortable Fahrten innerhalb der Stadt.</p>
            </motion.div>
          </div>
        </section>
        <section id="stats" className="my-5">
          <h2>Unsere Statistik</h2>
          <div className="row">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="col-md-4 stat-card"
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
        <section id="contact" className="my-5">
          <h2>Kontakt</h2>
          <p><FaPhone /> +49 711 1234567</p>
          <p><FaEnvelope /> info@taxistuttgart.de</p>
        </section>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Taxi Stuttgart</p>
        <Link to="/impressum" className="text-white ms-2">Impressum</Link>
        <Link to="/admin" className="text-white ms-2">Admin</Link>
      </footer>
    </div>
  );
}

export default Home;
