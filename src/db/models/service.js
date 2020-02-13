'use strict';
module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define('Service', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
     type: DataTypes.INTEGER,
     allowNull: false
    }
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};