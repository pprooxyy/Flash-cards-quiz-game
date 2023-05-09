'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Desk, { foreignKey: 'deskId' });
    }
  }
  Question.init(
    {
      deskId: DataTypes.INTEGER,
      question: DataTypes.STRING,
      answer0: DataTypes.STRING,
      answer1: DataTypes.STRING,
      answer2: DataTypes.STRING,
      answer3: DataTypes.STRING,
      correctAnswer: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
