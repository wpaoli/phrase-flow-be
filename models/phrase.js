'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phrase extends Model {
    
    static associate(models) {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user' // alias for this relationship
      });
    }
  }
  Phrase.init({
    phrase: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // 'users' refers to the table name
        key: 'id', // 'id' refers to the column name in users table
      }
    }
  }, {
    sequelize,
    modelName: 'Phrase',
  });

  return Phrase;
};