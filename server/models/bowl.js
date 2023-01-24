const {DataTypes} = require('sequelize');
const sequelize = require('../config/DBConnect');

const Bowl = sequelize.define('Bowl',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    bowlName:{ type: DataTypes.STRING},
    proteins:{ type: DataTypes.INTEGER},
    ingredients :{ type: DataTypes.INTEGER},
    price:{ type: DataTypes.STRING},
    stock:{ type: DataTypes.INTEGER},
    img:{ type: DataTypes.STRING},
    
},{timestamps: false})

module.exports = Bowl;