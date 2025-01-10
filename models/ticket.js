"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {}
  }
  Ticket.init(
    {
      flightId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Ticket"
    }
  );
  return Ticket;
};
