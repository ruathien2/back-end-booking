"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class clinics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clinics.init(
    {
      name: DataTypes.TEXT,
      address: DataTypes.TEXT,
      descriptionMarkdown: DataTypes.TEXT,
      descriptionHTML: DataTypes.TEXT,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "clinics",
    }
  );
  return clinics;
};
