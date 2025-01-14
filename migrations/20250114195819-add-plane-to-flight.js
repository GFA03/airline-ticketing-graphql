'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Flights', 'planeId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Planes', // References the Plane model
        key: 'id',       // The primary key of the Plane model
      },
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Flights', 'planeId');
  }
};