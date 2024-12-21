import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Admin.css';
import { getAllBookings, deleteBooking, updateBooking, getBooking } from './db';
import Modal from './Modal';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [bookingToEdit, setBookingToEdit] = useState(null);
  const navigate = useNavigate();

  const adminPassword = 'admin';

  useEffect(() => {
    const fetchBookings = async () => {
      if (loggedIn) {
        try {
          const allBookings = await getAllBookings();
          setBookings(allBookings);
        } catch (error) {
          console.error("Fehler beim Laden der Buchungen:", error);
          alert("Fehler beim Laden der Buchungen.");
        }
      }
    };
    fetchBookings();
  }, [loggedIn]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === adminPassword) {
      setLoggedIn(true);
    } else {
      alert('Falsches Passwort');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPassword('');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Möchtest du diese Buchung wirklich löschen?')) {
      try {
        await deleteBooking(id);
        setBookings(bookings.filter(booking => booking.id !== id));
      } catch (error) {
        console.error("Fehler beim Löschen der Buchung:", error);
        alert("Fehler beim Löschen der Buchung.");
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const booking = await getBooking(id);
      setBookingToEdit(booking);
      setEditModalOpen(true);
    } catch (error) {
      console.error("Fehler beim Laden der Buchung zur Bearbeitung:", error);
      alert("Fehler beim Laden der Buchung zur Bearbeitung.");
    }
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setBookingToEdit(null);
  };

  const handleModalSubmit = async (updatedBooking) => {
    try {
      await updateBooking(bookingToEdit.id, updatedBooking);
      setBookings(bookings.map(booking =>
        booking.id === bookingToEdit.id ? { ...updatedBooking, id: bookingToEdit.id } : booking
      ));
      setEditModalOpen(false);
      setBookingToEdit(null);
    } catch (error) {
      console.error("Fehler beim Bearbeiten der Buchung:", error);
      alert("Fehler beim Bearbeiten der Buchung.");
    }
  };

  return (
    <div id="root">
      <header>
        <nav>
          <h2><a href="/" className="logo text-warning">Taxi Stuttgart</a></h2>
        </nav>
      </header>
      <div className="banner"></div>
      <main className="container">
        {!loggedIn ? (
          <div className="admin-login">
            <h2>Admin Login</h2>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Passwort"
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div className="admin-container">
            <div className="admin-header">
              <h2>Admin Bereich</h2>
              <button onClick={handleLogout}>Ausloggen</button>
            </div>
            <div className="bookings-list">
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <div key={index} className="booking-card">
                    <h3>Booking #{index + 1}</h3>
                    <p><strong>Name:</strong> {booking.name}</p>
                    <p><strong>E-Mail:</strong> {booking.email}</p>
                    <p><strong>Telefonnummer:</strong> {booking.phone}</p>
                    <p><strong>Datum:</strong> {booking.date ? new Date(booking.date).toLocaleDateString() : 'Nicht definiert'}</p>
                    <p><strong>Uhrzeit:</strong> {booking.time || 'Nicht definiert'}</p>
                    <p><strong>Nachricht:</strong> {booking.message || 'Keine Nachricht'}</p>
                    <div className="booking-actions">
                      <button onClick={() => handleEdit(booking.id)} className="btn btn-primary me-2">Bearbeiten</button>
                      <button onClick={() => handleDelete(booking.id)} className="btn btn-danger">Löschen</button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Keine Buchungen vorhanden.</p>
              )}
            </div>
            <Modal
              isOpen={editModalOpen}
              onClose={handleModalClose}
              onSubmit={handleModalSubmit}
              initialData={bookingToEdit}
            />
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 Taxi Stuttgart</p>
        <Link to="/impressum" className="text-white ms-2">Impressum</Link>
        <Link to="/admin" className="text-white ms-2">Admin</Link>
      </footer>
    </div>
  );
};

export default Admin;