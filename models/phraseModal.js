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
    // Your associations go here
    Phrase.belongsToMany(models.Tag, { through: "PhraseTags" });
  };

  return Phrase;
};
