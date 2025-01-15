"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flight.belongsToMany(models.User, {
        through: models.Ticket,
        uniqueKey: 'ticketId',
        foreignKey: "flightId",
      });
    }
    static associate(models) {
      // Define the many-to-one relationship between Flight and Plane
      Flight.belongsTo(models.Plane, {
        foreignKey: 'planeId',   // The foreign key in the Flight model
        as: 'plane',             // Alias for the relationship (optional)
      });
    };
  }
  Flight.init(
    {
      planeId: DataTypes.STRING,
      airline: DataTypes.STRING,
      departure: DataTypes.STRING,
      arrival: DataTypes.STRING,
      departureTime: DataTypes.DATE,
      arrivalTime: DataTypes.DATE,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
