import localforage from 'localforage';

    const bookingsStore = localforage.createInstance({
      name: 'taxi_bookings'
    });

    async function addBooking(booking) {
      const id = Date.now().toString();
      await bookingsStore.setItem(id, booking);
    }

    async function getAllBookings() {
      const bookings = [];
       await bookingsStore.iterate((value, key) => {
        bookings.push({ id: key, ...value });
      });
      return bookings;
    }

    async function deleteBooking(id) {
      await bookingsStore.removeItem(id);
    }

    async function updateBooking(id, updatedBooking) {
      await bookingsStore.setItem(id, updatedBooking);
    }

    async function getBooking(id) {
      return await bookingsStore.getItem(id);
    }

    export { addBooking, getAllBookings, deleteBooking, updateBooking, getBooking };
