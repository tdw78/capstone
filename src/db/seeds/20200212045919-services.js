'use strict';

const faker = require("faker");

let services = [
  {
   name: "Photography",
   price: 2400,
   createdAt: new Date(),
   updatedAt: new Date()
  },
  {
    name: "DJ",
    price: 1200,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Catering",
    price: 2000,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Limos",
    price: 1500,
    createdAt: new Date(),
    updatedAt: new Date()
   }
];


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Services", services, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Services", null, {});

  }
};
