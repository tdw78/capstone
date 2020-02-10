const Review = require("./models").Review;
const Authorizer = require("../policies/review");

module.exports = {
   getAllReviews(callback){
      return Review.findAll()
       .then((reviews) => {
          callback(null, reviews)
       })
       .catch((err) => {
          callback(err)
       })
  },
  addReview(newReview, callback){
     return Review.create({
       title: newReview.title,
       body: newReview.body,
       userId: newReview.userId
     })
     .then((review) => {
        callback(null, review);
     })
     .catch((err) => {
        callback(err);
     })
  },
  getReview(id, callback){
    return Review.findByPk(id)
     .then((review) => {
       callback(null, review);
    })
    .catch((err) => {
       callback(err)
    })
  },
  destroyReview(req, callback){

   return Review.findByPk(req.params.id)
   .then((review) => {
     const authorized = new Authorizer(req.user, review).new();

     if(authorized) {
       review.destroy()
       .then((res) => {
         callback(null, review);
       });
     } else {

       req.flash("notice", "You are not authorized to do that.")
       callback(401);
     }
   })
   .catch((err) => {
     callback(err);
   });
 },
 updateReview(req, updatedReview, callback){
    return Review.findByPk(req.params.id)
      .then((review) => {
        if(!review){
          return callback("Review not found");
      } 
       
      const authorized = new Authorizer(req.user, review).update();

        if(authorized){
          review.update(updatedReview, {
            fields: Object.keys(updatedReview)
          })
          .then(() => {
            callback(null, review);
          })
          .catch((err) => {
            callback(err);
          });
        } else {
          req.flash("notice", "Sorry, buy you are not authorized to do that.");
          callback("Forbidden");
        }
    });
 }
}