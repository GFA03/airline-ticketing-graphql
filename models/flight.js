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
      // define association here
    }
  }
  Flight.init(
    {
      airline: DataTypes.STRING,
      departure: DataTypes.STRING,
      arrival: DataTypes.STRING,
      departure_time: DataTypes.DATE,
      arrival_time: DataTypes.DATE,
      duration: DataTypes.INTEGER,
      total_seats: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
