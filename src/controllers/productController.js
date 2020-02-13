const productQueries = require("../db/queries.products");

module.exports = {

index(req, res, next){
  productQueries.getAllProducts((err, products) => {
      if(err){
        res.redirect(500, "/");
      } else {
       res.render("products/productsPage", {products});
      }
   })
 },
 tablesChairs(req, res, next){
    res.render("products/tables_chairs");
 },
 centerpieces(req, res, next){
    res.render("products/centerpieces");
 },
 invitations(req, res, next){
    res.render("products/invitations");
 },
 bouquets(req, res, next){
    res.render("products/bouquets");
 }

}