import { getAllBookingService,createBookingService,getBookingByIdService,cancelBookingService } from "../services/bookingService.js";
import { response } from '../../response.js'


export const getAllBookingController = async(req,res) =>{
    try {
        const result = await getAllBookingService()
        response(200,"Succes Get All  Booking", result,res)
    } catch (error) {
        response(500,"Internal Server Error",error,res)
    }
}

export const getBookingByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getBookingByIdService(id)
        response(200,"Success Get Booking By Id",result,res)
    } catch (error) {

        console.log(error)
        response(404,"Booking Not Found",error,res)
    }
}

export const createBookingController = async (req, res) => {
try {
    const { room_id, start_date, end_date } = req.body
    const result = await createBookingService(
    room_id,
    start_date,
    end_date
    )
    response(200,"Success Create Booking",result,res)

    } catch (error) {
        console.log(error)
        response(404,"Room Not Fond",error,res)
    }
}

export const cancelBookingController = async (req,res)=>{
    try {
        const {id} = req.params

        const data = await cancelBookingService(id)
        response(200,"Success Update Status",data,res)

    } catch (error) {
        console.log(error)
        response(500,"Internal Server Error",error,res)
    }
}