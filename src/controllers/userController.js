const passport = require("passport");
const flash = require("express-flash");

module.exports = {
  
  signUpForm(req, res, next){
      res.render("users/signUpForm");
  },
  signInForm(req, res, next){
    res.render("users/signInForm");
  }
}