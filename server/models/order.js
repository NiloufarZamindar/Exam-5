const { DataTypes } = require("sequelize");
const sequelize = require("../config/DBConnect");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    products: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  { timestamps: false }
);

module.exports = Order;
