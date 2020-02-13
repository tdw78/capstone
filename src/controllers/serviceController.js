const serviceQueries = require("../db/queries.services");

module.exports = {

index(req, res, next){
  serviceQueries.getAllServices((err, services) => {
      if(err){
        res.redirect(500, "/");
      } else {
       res.render("services/servicesPage", {services});
      }
   })
 },
 photography(req, res, next){
    res.render("services/photography");
 },
 music(req, res, next){
    res.render("services/music");
 },
 limos(req, res, next){
    res.render("services/limos");
 },
 catering(req, res, next){
   res.render("services/catering");
 }

}