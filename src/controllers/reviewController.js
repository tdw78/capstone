const reviewQueries = require("../db/queries.reviews");
const Authorizer = require("../policies/review");

module.exports = {

  reviews(req, res, next){
    const authorized = new Authorizer(req.user).show();
    
    if(authorized) {
      reviewQueries.getAllReviews((err, reviews) => {
        if(err){
          res.redirect(500, "/")
        } else {
          res.render("static/reviews", {reviews});
        }
      })
    } else {
      req.flash("notice", "You are not authorized to do that.");
      res.redirect("/reviews");
    }
  },
   reviewForm(req, res, next){
     const authorized = new Authorizer(req.user).new();
     
     if(authorized) { 
       res.render("static/reviewForm");
    } else {
       req.flash("notice", "You are not authorized")
       res.redirect("/")
    }
   },
   createReview(req, res, next){
    const authorized = new Authorizer(req.user).create();

    if(authorized){
     let newReview = {
       title: req.body.title,
       body: req.body.body,
       userId: req.user.id
     };
      reviewQueries.addReview(newReview, (err, review) => {
           if(err){
             res.redirect(500, "/reviews/form");
           } else (
             res.redirect(303, "/reviews")
           )
      })
     } else {
      req.flash("notice", "You are not authorized to do that.");
      res.redirect("/reviews");
    }
  },
  show(req, res, next){
    
    reviewQueries.getReview(req.params.id, (err, review) => {
        if(err || review == null){
          console.log(err);
          res.redirect(404, "/reviews")
        } else {
          res.render("reviews/show", {review});
        }
    }) 
  },
  destroy(req, res, next){
    
      reviewQueries.destroyReview(req, (err, review) => {
           if(err){
             res.redirect(404, `/reviews/${req.params.id}`)
           } else {
             res.redirect(303, "/reviews");
           }
      })

  },
  edit(req, res, next){
  
    reviewQueries.getReview(req.params.id, (err, review) => {
       if(err || review == null){
          res.redirect(404, "/");
        } else {
          const authorized = new Authorizer(req.user, review).edit();
            if(authorized) {
             res.render("reviews/edit", {review})
          } else {
            req.flash("notice", "You are not authorized to do that.");
            res.redirect(`/reviews/${req.params.id}`);
          }
      }
    });

  },
  update(req, res, next){
    
      reviewQueries.updateReview(req, req.body, (err, review) => {
          if(err || review == null) {
            res.redirect(401, `/reviews/${req.params.id}/edit`);
          } else {
            res.redirect(`/reviews/${req.params.id}`);
          }
      });
 }
 
}