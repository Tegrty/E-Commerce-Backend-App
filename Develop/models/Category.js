const { Model, DataTypes } = require('sequelize'); // The purpose of this line is to import the Model and DataTypes classes from the sequelize package.

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    
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
