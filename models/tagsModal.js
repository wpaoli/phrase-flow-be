"use strict";

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      tag: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    // User.hasMany(models.PhraseTag, { foreignKey: "t", as: "phrases" });
  };
  return Tag;
};
