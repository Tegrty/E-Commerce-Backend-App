// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize'); // The purpose of this line is to import the Model and DataTypes classes from the sequelize package.
// import our database connection from config.js
const sequelize = require('../config/connection'); // The purpose of this line is to import the sequelize connection from the config/connection.js file.

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {} 

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
