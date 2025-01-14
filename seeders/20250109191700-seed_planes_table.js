'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Planes', [
      {
        registration: 'ABC123',
        airline: 'HiSky',
        model: 'Boeing 737',
        numberOfRows: 30,
        numberOfSeatsPerRow: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registration: 'DEF456',
        airline: 'Tarom',
        model: 'Airbus A320',
        numberOfRows: 28,
        numberOfSeatsPerRow: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registration: 'GHI789',
        airline: 'Tarom',
        model: 'Boeing 777',
        numberOfRows: 50,
        numberOfSeatsPerRow: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Planes', null, {});
  },
};
