module.exports = {

  home(req, res, next){
       res.render("static/homePage");
  },
  productsServices(req, res, next){
      res.render("static/products-services");
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
  decorations(req, res, next){
    res.render("albums/decorations");
  },
  decorSlideshow(req, res, next){
    res.render("albums/decorSlideshow");
  },
  cakes(req, res, next){
   res.render("albums/cakes");
  },
  cakeSlideshow(req, res, next){
    res.render("albums/cakeSlideshow");
   },
   catering(req, res, next){
    res.render("albums/catering");
   },
   cateringSlideshow(req, res, next){
     res.render("albums/cateringSlideshow");
   },
   dresses(req, res, next){
      res.render("albums/dresses");
   },
   dressSlideshow(req, res, next){
      res.render("albums/dressSlideshow");
    },
   reception(req, res, next){
      res.render("albums/reception");
   },
   receptionSlideshow(req, res, next){
      res.render("albums/receptionSlideshow");
    },

   invitations(req, res, next){
      res.render("albums/invitations");
   },
   inviteSlideshow(req, res, next){
      res.render("albums/inviteSlideshow");
   }
   
}