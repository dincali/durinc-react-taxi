import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
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
              console.error("Failed to fetch bookings:", error);
              alert("Failed to fetch bookings.");
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
          alert('Incorrect password');
        }
      };

      const handleLogout = () => {
        setLoggedIn(false);
        setPassword('');
      };

      const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
          try {
            await deleteBooking(id);
            setBookings(bookings.filter(booking => booking.id !== id));
          } catch (error) {
            console.error("Failed to delete booking:", error);
            alert("Failed to delete booking.");
          }
        }
      };

      const handleEdit = async (id) => {
        try {
          const booking = await getBooking(id);
          setBookingToEdit(booking);
          setEditModalOpen(true);
        } catch (error) {
          console.error("Failed to fetch booking for edit:", error);
          alert("Failed to fetch booking for edit.");
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
          console.error("Failed to update booking:", error);
          alert("Failed to update booking.");
        }
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
                  <div className="booking-actions">
                    <button onClick={() => handleEdit(booking.id)}>Edit</button>
                    <button onClick={() => handleDelete(booking.id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No bookings yet.</p>
            )}
          </div>
          <Modal
            isOpen={editModalOpen}
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
            initialData={bookingToEdit}
          />
        </div>
      );
    };

    export default Admin;
