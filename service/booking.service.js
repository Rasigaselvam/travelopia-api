const bookRepository  = require('../repository/book.repository');

class BookingService {

    constructor() {}

    async createBooking(info) {
        return await bookRepository.createBooking(info);
    }

}

module.exports = new BookingService();