"use strict";
module.exports = (sequelize, DataTypes) => {
  const PhraseTag = sequelize.define(
    "PhraseTag",
    {
      phraseId: {
        type: DataTypes.INTEGER,
        references: {
          model: "phrases", // 'phrases' refers to the table name
          key: "id", // 'id' refers to the column name in phrases table
        },
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tags", // 'tags' refers to the table name
          key: "id", // 'id' refers to the column name in tags table
        },
      },
    },
    {}
  );
  PhraseTag.associate = function (models) {
    PhraseTag.hasMany(models.Phrase, { foreignKey: "userId", as: "phrases" });
  };
  return PhraseTag;
};
