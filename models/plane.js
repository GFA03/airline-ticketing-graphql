"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Plane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Plane.hasMany(models.Flight);
      }
  }
  Plane.init(
    {
      registration: DataTypes.STRING,
      airline: DataTypes.STRING,
      model: DataTypes.STRING,
      numberOfRows: DataTypes.INTEGER,
      numberofSeatsPerRow: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Plane",
    }
  );
  return Plane;
};
