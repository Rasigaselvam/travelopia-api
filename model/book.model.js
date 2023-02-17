module.exports = (sequelize, DataTypes, Model) => {

    class Booking extends Model {}

    Booking.init({
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        country: {
          type: DataTypes.STRING,
          allowNull: false
        },
        numberoftravellers: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdate: {
            type: DataTypes.DATE
          },
          updateddate: {
              type: DataTypes.DATE
          },
          createdby: {
              type: DataTypes.STRING,
              allowNull: false
          },
          updatedby: {
              type: DataTypes.STRING
          },
      }, {
        sequelize,
        modelName: 'booking'
      });
      
      return Booking;
}