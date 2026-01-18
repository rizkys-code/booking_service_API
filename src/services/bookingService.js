import { getAllBookings, getBookingById } from "../model/bookingModel.js";


export const getAllBookingService = async ()=>{
    const [result] = await getAllBookings()
    return result
}

export const getBookingByIdService = async (id)=>{
    const [result] = await getBookingById(id)
    return result[0]
}