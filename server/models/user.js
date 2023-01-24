const { DataTypes } = require("sequelize");
const sequelize = require("../config/DBConnect");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fullname: { type: DataTypes.STRING },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: { type: DataTypes.STRING, allowNull: false },
    salt: { type: DataTypes.STRING, allowNull: false}
  },
  { timestamps: false }
);

module.exports = User;
