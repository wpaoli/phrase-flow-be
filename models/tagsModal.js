"use strict";

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      tag_name: { type: DataTypes.STRING },
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

  Tag.associate = function (models) {
    Tag.belongsToMany(models.Phrase, { through: "PhraseTags" });
    Tag.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Tag;
};
