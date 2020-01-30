module.exports = {

  home(req, res, next){
       res.render("static/homePage");
  },
  products(req, res, next){
      res.render("static/products");
  },
  gallery(req, res, next){
    res.render("static/gallery");
  },
  contact(req, res, next){
    res.render("static/contact");
  },
  about(req, res, next){
    res.render("static/about");
  },
  reviews(req, res, next){
    res.render("static/reviews");
  }
}