'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartItem = sequelize.define('CartItem', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  CartItem.associate = function(models) {
   CartItem.belongsToMany(models.User, {
     foreignKey: "userId",
     onDelete: "CASCADE"
   })
  };
  return CartItem;
};