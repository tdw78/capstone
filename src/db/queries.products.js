const Product = require("./models").Product;

module.exports = {

getAllProducts(callback){
    return Product.findAll()
      .then((products) => {
        callback(null, products)
     })
      .catch((err) => {
        callback(err)
    })
}

}