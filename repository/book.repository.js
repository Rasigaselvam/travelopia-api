const { connect } = require('../config/db.config');


class BookRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async createBooking(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.db.booking.create(task);
        } catch(err) {
            console.log(err)
        }
        return data;
    }
}

module.exports = new BookRepository();