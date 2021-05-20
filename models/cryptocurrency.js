'use strict';
const {
  Model
} = require('sequelize');
const watchlist = require('./watchlist');
module.exports = (sequelize, DataTypes) => {
  class cryptocurrency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.cryptocurrency.belongsTo(models.watchlist);
      // models.cryptocurrency.belongsToMany(models.users, {through: 'watchlist'});
      // making an association between cryptocurrency and watchlist
      //reason why I made an association belongstomany is becuase the user is adding a cryptocurrency to his/her watch list
    }
  };
  cryptocurrency.init({
    id: { 
      type: DataTypes.STRING,
      primaryKey: true
    },
    rank: DataTypes.STRING,
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    supply: DataTypes.STRING,
    maxSupply: DataTypes.STRING,
    marketCapUsd: DataTypes.STRING,
    volumeUsd24Hr: DataTypes.STRING,
    priceUsd: DataTypes.STRING,
    changePercent24Hr: DataTypes.STRING,
    vwap24Hr: DataTypes.STRING,
    explorer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cryptocurrency',
  });
  return cryptocurrency;
};