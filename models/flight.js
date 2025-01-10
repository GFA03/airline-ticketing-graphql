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
        foreignKey: "flightId",
      });
    }
  }
  Flight.init(
    {
      airline: DataTypes.STRING,
      departure: DataTypes.STRING,
      arrival: DataTypes.STRING,
      departureTime: DataTypes.DATE,
      arrivalTime: DataTypes.DATE,
      duration: DataTypes.INTEGER,
      totalSeats: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
