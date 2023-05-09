'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Desk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Statistic, { foreignKey: 'deskId' });
      this.hasMany(models.Question, { foreignKey: 'deskId' });
    }
  }
  Desk.init(
    {
      title: DataTypes.STRING,
      quest_count: DataTypes.INTEGER,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Desk',
    }
  );
  return Desk;
};
