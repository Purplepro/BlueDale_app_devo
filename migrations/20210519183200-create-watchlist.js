'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('watchlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cryptoid: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      supply: {
        type: Sequelize.STRING
      },
      maxSupply: {
        type: Sequelize.STRING
      },
      marketCapUsd: {
        type: Sequelize.STRING
      },
      volumeUsd24Hr: {
        type: Sequelize.STRING
      },
      priceUsd: {
        type: Sequelize.STRING
      },
      changePercent24Hr: {
        type: Sequelize.STRING
      },
      vwap24Hr: {
        type: Sequelize.STRING
      },
      explorer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('watchlists');
  }
};