import { Database } from '@libsql/sqlite-wasm';

    let db = null;

    async function initializeDB() {
      if (db) return db;
      db = new Database(':memory:');
      await db.exec(`
        CREATE TABLE IF NOT EXISTS bookings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          phone TEXT,
          date TEXT,
          time TEXT,
          message TEXT
        )
      `);
      return db;
    }

    async function addBooking(booking) {
      const database = await initializeDB();
      await database.run(
        'INSERT INTO bookings (name, email, phone, date, time, message) VALUES (?, ?, ?, ?, ?, ?)',
        [booking.name, booking.email, booking.phone, booking.date ? booking.date.toISOString() : null, booking.time, booking.message]
      );
    }

    async function getAllBookings() {
      const database = await initializeDB();
      const result = await database.all('SELECT * FROM bookings');
      return result;
    }

    export { initializeDB, addBooking, getAllBookings };
