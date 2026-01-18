import {db} from '../config/connection.js'

export const getAllBookings = ()=>{
    const sql = "SELECT * FROM bookings"
    return db.query(sql)
}

export const getBookingById = (id) =>{
    const sql = `SELECT * FROM rooms WHERE id = ${id} `
    return db.query(sql)
}