'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckedTickets', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ticketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tickets', // Correctly references the Tickets table
          key: 'id', // References the primary key in Tickets
        },
        onDelete: 'CASCADE',
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      seat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    
    await queryInterface.addConstraint('CheckedTickets', {
      fields: ['ticketId'],
      type: 'unique',
      name: 'unique_ticketId_constraint', // Optional name for the constraint
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CheckedTickets');
  }
};