const { Model, DataTypes } = require('sequelize'); // The purpose of this line is to import the Model and DataTypes classes from the sequelize package.

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
