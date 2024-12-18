import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import './Admin.css';
    import { getAllBookings } from './db';

    const Admin = () => {
      const [password, setPassword] = useState('');
      const [loggedIn, setLoggedIn] = useState(false);
      const [bookings, setBookings] = useState([]);
      const navigate = useNavigate();

      const adminPassword = 'admin';

      useEffect(() => {
        const fetchBookings = async () => {
          if (loggedIn) {
            const allBookings = await getAllBookings();
            setBookings(allBookings);
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
          alert('Incorrect password');
        }
      };

      const handleLogout = () => {
        setLoggedIn(false);
        setPassword('');
      };

      if (!loggedIn) {
        return (
          <div className="admin-login">
            <h2>Admin Login</h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        );
      }

      return (
        <div className="admin-container">
          <div className="admin-header">
            <h2>Admin Panel</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="bookings-list">
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <div key={index} className="booking-card">
                  <h3>Booking #{index + 1}</h3>
                  <p><strong>Name:</strong> {booking.name}</p>
                  <p><strong>Email:</strong> {booking.email}</p>
                  <p><strong>Phone:</strong> {booking.phone}</p>
                  <p><strong>Date:</strong> {booking.date ? new Date(booking.date).toLocaleDateString() : 'Not specified'}</p>
                  <p><strong>Time:</strong> {booking.time || 'Not specified'}</p>
                  <p><strong>Message:</strong> {booking.message || 'No message'}</p>
                </div>
              ))
            ) : (
              <p>No bookings yet.</p>
            )}
          </div>
        </div>
      );
    };

    export default Admin;
