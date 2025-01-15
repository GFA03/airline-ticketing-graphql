"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class CheckedTicket extends Model {
    static associate(models) {
        CheckedTicket.belongsTo(models.Ticket);
    }
  }
  CheckedTicket.init(
    {
      ticketId: DataTypes.INTEGER,
      row: DataTypes.INTEGER,
      seat: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "CheckedTicket"
    }
  );
  return CheckedTicket;
};
