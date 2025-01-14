'use strict';
const bcrypt = require("bcrypt");
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = await bcrypt.hash('aaaa', 5);
    const role = "user";
    const mockUsers = new Array(100).fill().map(() => {
      return {
        name: faker.internet.username(),
        password: password,
        //role: role,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });
    console.log(mockUsers[1]);

    await queryInterface.bulkInsert('Users', mockUsers, {});
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
