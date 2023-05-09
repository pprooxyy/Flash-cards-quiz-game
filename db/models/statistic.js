'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Desk, { foreignKey: 'deskId' });
    }
  }
  Statistic.init(
    {
      userId: DataTypes.INTEGER,
      deskId: DataTypes.INTEGER,
      correctAnswerCount: DataTypes.INTEGER,
      questionCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Statistic',
    }
  );
  return Statistic;
};
