"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PhraseTag extends Model {
    static associate(models) {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      // define association here
      this.belongsToMany(models.Tag, { through: PhraseTag });
      // this.belongsToMany(models.Phrase, {
      //   through: PhraseTag,
      // });
    }
  }
  PhraseTag.init(
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
    {
      sequelize,
      modelName: "PhraseTag",
    }
  );

  return PhraseTag;
};
