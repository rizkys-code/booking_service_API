import express from 'express'
const app = express()
const port = 3001
app.use(express.json())
import bookingRouter from './src/routes/bookingRouter.js'


app.use('/bookings', bookingRouter)


app.listen(port,(
    console.log(`Server ini berjalan di port: http://localhost/${port}`)
))