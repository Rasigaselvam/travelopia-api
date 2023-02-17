const bookRepository  = require('../repository/book.repository');

class BookingService {

    constructor() {}

    async createBooking(info) {
        return await bookRepository.createBooking(info);
    }

    async getBooking() {
        return await bookRepository.getBooking();
    }

}

module.exports = new BookingService();