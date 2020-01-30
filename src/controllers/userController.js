module.exports = {
  
  signUpForm(req, res, next){
      res.render("users/signUpForm");
  },
  signInForm(req, res, next){
    res.render("users/signInForm");
  },
  signOut(req, res, next){
      req.logout();
      req.flash("notice", "You have signed out");
      res.redirect("/");
  }
}