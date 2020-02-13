'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};