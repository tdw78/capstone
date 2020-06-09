const cartItemQueries = require("../db/queries.cartItems");

module.exports = {

  getCart(req, res, next){
    cartItemQueries.getCartItems((err, items) => {
       
      if(err) {
        res.redirect(500, "/");
      } else {
        res.render("users/cart", {items});
     }
   })
 },

  addToCart(req, res, next){
    console.log(req.price)
    let newItem = {
      name: req.body.name,
      price: req.body.price,
      userId: req.user.id
  };
  cartItemQueries.addItem(newItem, (err, item) => {
     if(err) {
       res.redirect(500, "/products/bouquets");
     } else {
       res.redirect(303, "/products/bouquets");
     }
   })
 }

}