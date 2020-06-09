const CartItem = require("./models").CartItem;

module.exports = {

  getCartItems(callback){
    return CartItem.findAll()
    .then((items) => {
      callback(null, items);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addItem(newItem, callback){
    return CartItem.create({
      name: newItem.name,
      price: newItem.price,
      userId: newItem.userId
   })
   .then((item) => {
     callback(null, item);
   })
   .catch((err) => {
     callback(err);
   });
  }
}