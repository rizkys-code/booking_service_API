import { getAllBookingService } from "../services/bookingService.js";
import { response } from '../../response.js'


export const getAllBookingController = async(req,res) =>{
    try {
        const result = await getAllBookingService()
        response(200,"Succes Get All  Booking", result,res)
    } catch (error) {
        response(500,"Internal Server Error",error,res)
    }
}