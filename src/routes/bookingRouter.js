import express from 'express'
const router = express.Router()
import { getAllBookingController,createBookingController,getBookingByIdController,cancelBookingController } from '../controller/bookingController.js'


router.get('/:id', getBookingByIdController)
router.get('/', getAllBookingController)
router.post('/',  createBookingController)
router.patch('/:id/cancel', cancelBookingController)

export default router