
const express = require('express');
require('dotenv').config()
var cors = require('cors')
const bookingController = require('./controller/booking.controller')



const app = express();
const port = 5000;

app.use(express.json());

 
app.use(cors())

app.get('/api/booking', (req, res) => {
    bookingController.getBooking().then(data => res.json(data));
});

app.post('/api/booking', (req, res) => {
    bookingController.createBooking(req.body.booking).then(
        data => res.json(data));
});


app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})