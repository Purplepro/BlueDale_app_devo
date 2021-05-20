'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.watchlist.hasMany(models.cryptocurrency)
    }
  };
  watchlist.init({
    // id: {
    //   type:DataTypes.INTEGER,
    //   primaryKey: true
    // },
    cryptoid: DataTypes.STRING,
    rank: DataTypes.STRING,
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    priceUsd: DataTypes.STRING,
    supply: DataTypes.STRING,
    maxSupply: DataTypes.STRING,
    marketCapUsd: DataTypes.STRING,
    volumeUsd24Hr: DataTypes.STRING,
    changePercent24Hr: DataTypes.STRING,
    vwap24Hr: DataTypes.STRING,
    explorer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'watchlist',
  });
  return watchlist;
};