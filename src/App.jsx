import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './pages/Home';
    import BookingDate from './pages/BookingDate';
    import BookingTime from './pages/BookingTime';
    import BookingDetails from './pages/BookingDetails';
    import BookingConfirmation from './pages/BookingConfirmation';
    import Admin from './Admin';
    import './App.css';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/date" element={<BookingDate />} />
            <Route path="/booking/time" element={<BookingTime />} />
            <Route path="/booking/details" element={<BookingDetails />} />
            <Route path="/booking/confirmation" element={<BookingConfirmation />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      );
    }

    export default App;
