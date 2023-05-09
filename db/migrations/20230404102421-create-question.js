'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      deskId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Desks',
          },
          key: 'id',
        },
      },
      question: {
        type: Sequelize.STRING,
      },
      answer0: {
        type: Sequelize.STRING,
      },
      answer1: {
        type: Sequelize.STRING,
      },
      answer2: {
        type: Sequelize.STRING,
      },
      answer3: {
        type: Sequelize.STRING,
      },
      correctAnswer: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
