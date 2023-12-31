"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Phrase, { foreignKey: "userId", as: "phrases" });
  };
  return User;
};
