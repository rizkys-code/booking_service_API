import express from 'express'
const router = express.Router()
import { getAllBookingController } from '../controller/bookingController.js'

router.get('/', getAllBookingController)


export default router