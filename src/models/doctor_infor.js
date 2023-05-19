"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctor_infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doctor_infor.belongsTo(models.user, { foreignKey: "doctorId" });

      doctor_infor.belongsTo(models.allcodes, {
        foreignKey: "priceId",
        targetKey: "keyMap",
        as: "priceIdTypeData",
      });
      doctor_infor.belongsTo(models.allcodes, {
        foreignKey: "paymentId",
        targetKey: "keyMap",
        as: "paymentIdTypeData",
      });
      doctor_infor.belongsTo(models.allcodes, {
        foreignKey: "provinceId",
        targetKey: "keyMap",
        as: "provinceIdTypeData",
      });
    }
  }
  doctor_infor.init(
    {
      doctorId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      priceId: DataTypes.TEXT,
      provinceId: DataTypes.TEXT,
      paymentId: DataTypes.TEXT,
      addressClinic: DataTypes.TEXT,
      nameClinic: DataTypes.TEXT,
      note: DataTypes.TEXT,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "doctor_infor",
      freezeTableName: true,
    }
  );
  return doctor_infor;
};
