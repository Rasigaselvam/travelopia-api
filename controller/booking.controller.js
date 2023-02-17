const BookingService  = require('../service/booking.service');

class BookingController {

    async createBooking(task) {
        return await BookingService.createBooking(task);
    }
    async getBooking() {
        return await BookingService.getBooking();
    }
}
module.exports = new BookingController();