const BookingService  = require('../service/booking.service');

class BookingController {

    async createBooking(task) {
        console.log("enter the task", task)
        return await BookingService.createBooking(task);
    }
}
module.exports = new BookingController();