'use strict';
const faker = require("faker");

let products = [
   {
    name: "Bouquet #3",
    price: 300,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Bouquet #4",
    price: 400,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   }
];




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
