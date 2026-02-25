import axios from 'axios'
import { getAllBookings, getBookingById,checkBookingConflict,createBooking,cancelBooking } from "../model/bookingModel.js";


export const getAllBookingService = async ()=>{
    const [result] = await getAllBookings()
    return result
}

export const getBookingByIdService = async (id)=>{
    const [result] = await getBookingById(id)
    if (!result[0]) {
        throw new Error("Booking not found")
    }
    return result[0]
}

export const createBookingService = async (room_id, start_date, end_date)=>{
    const roomResponse = await axios.get(
    `http://localhost:3000/rooms/${room_id}`
    )

        const room = roomResponse.data.data

    if (!room) {
        throw new Error("Room not found")
    }

    if (room.is_active !== 1) {
        throw new Error("Room is not active")
    }

    const [conflict] = await checkBookingConflict(
    room_id,
    start_date,
    end_date
    )

        if (conflict[0].total > 0) {
    throw new Error("Room already booked at that date")
    }


    const [result] = await createBooking(
    room_id,
    start_date,
    end_date
    )

    return {
    message: "Booking created successfully",
    booking_id: result.insertId
    }
}


export const cancelBookingService = async (id) =>{
    const [data] = await cancelBooking(id)

    if(data.affectedRows === 0){
        throw new Error("Boolking Not Found Or already Cancelled")
    }
    return data
}