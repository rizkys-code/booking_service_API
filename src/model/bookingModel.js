import {db} from '../config/connection.js'

export const getAllBookings = ()=>{
    const sql = "SELECT * FROM bookings"
    return db.query(sql)
}

export const getBookingById = (id) =>{
    const sql = `SELECT * FROM bookings WHERE id = ${id} `
    return db.query(sql)
}

export const checkBookingConflict = (room_id, start_date, end_date) => {
  const sql = `
    SELECT COUNT(*) AS total
    FROM bookings
    WHERE room_id = ?
    AND start_date < ?
    AND end_date > ?
  `
  return db.query(sql, [room_id, end_date, start_date])
}



export const createBooking = (room_id, start_date, end_date) => {
    const sql = `
    INSERT INTO bookings (room_id, start_date, end_date, status)
    VALUES (?, ?, ?, 'BOOKED')
        `
    return db.query(sql, [room_id, start_date, end_date])
}

export const cancelBooking = (id) => {
    const sql = `UPDATE bookings SET status = 'CANCELLED'   WHERE id = ? AND status = 'BOOKED'`
    return db.query(sql,[id])
}
