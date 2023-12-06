"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      // define association here
    }
  }
  Tag.init(
    {
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );

  return Tag;
};
