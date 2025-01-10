'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const mockFlights = new Array(100).fill().map(() => {
      return {
        airline: faker.company.name(),
        departure: faker.location.city(),
        arrival: faker.location.city(),
        departureTime: faker.date.future(),
        arrivalTime: faker.date.future(),
        duration: Math.floor(Math.random() * 300),
        totalSeats: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    await queryInterface.bulkInsert('Flights', mockFlights, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
