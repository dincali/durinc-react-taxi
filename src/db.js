import initSqlJs from 'sql.js';

let db = null;

async function initializeDB() {
  if (db) return db;
  const SQL = await initSqlJs();
  db = new SQL.Database();
  db.run(`
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
  database.run(
    'INSERT INTO bookings (name, email, phone, date, time, message) VALUES (?, ?, ?, ?, ?, ?)',
    [booking.name, booking.email, booking.phone, booking.date ? booking.date.toISOString() : null, booking.time, booking.message]
  );
}

async function getAllBookings() {
  const database = await initializeDB();
  const result = database.exec('SELECT * FROM bookings');
  return result[0] ? result[0].values : [];
}

export { initializeDB, addBooking, getAllBookings };
