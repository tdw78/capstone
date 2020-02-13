'use strict';

const faker = require("faker");

let products = [
  {
   name: "Tables and Chairs",
   price: 400,
   createdAt: new Date(),
   updatedAt: new Date()
  },
  {
    name: "Wedding Cakes",
    price: 200,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Wedding Invitations",
    price: 250,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Bride Bouquet",
    price: 150,
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
