"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Phrase = sequelize.define(
    "Phrase",
    {
      phrase: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      definition: {
        type: DataTypes.STRING,
      },
      frequency: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users", // 'users' refers to the table name
          key: "id", // 'id' refers to the column name in users table
        },
      },
    },
    {}
  );
  Phrase.associate = function (models) {
    Phrase.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };
  return Phrase;
};

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
        foreignKey: "userId",
        as: "user", // alias for this relationship
      });
    }
  }
  Phrase.init(
    {
      phrase: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      definition: {
        type: DataTypes.STRING,
      },
      frequency: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users", // 'users' refers to the table name
          key: "id", // 'id' refers to the column name in users table
        },
      },
    },
    {
      sequelize,
      modelName: "Phrase",
    }
  );

  return Phrase;
};
