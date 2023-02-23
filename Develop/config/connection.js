require('dotenv').config();

const Sequelize = require('sequelize');
// This is the connection to the database
const sequelize = process.env.JAWSDB_URL // The purpose of this line is to check if the environment variable JAWSDB_URL exists. If it does, then the connection is made to the JawsDB database. If it doesn't, then the connection is made to the local database.
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
