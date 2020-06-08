'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "Must be a vaild email"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "member"
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review, {
      foreignKey: "userId",
      as: "reviews"
    });
    User.belongsToMany(models.CartItem, {
      foreignKey: "userId",
      as: "items"
    })
  };
  User.prototype.isAdmin = function() {
    return this.role === "admin";
  };
  User.prototype.isMember = function() {
    return this.role === "member";
  };

  
  return User;
};