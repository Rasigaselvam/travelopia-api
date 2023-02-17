
const express = require('express');
require('dotenv').config()
var cors = require('cors')
const bookingController = require('./controller/booking.controller')



const app = express();
const port = 5000;

app.use(express.json());

 
app.use(cors())

app.post('/api/booking', (req, res) => {
    bookingController.createBooking(req.body.booking).then(
        data => res.json(data));
});


app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})