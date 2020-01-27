require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");

const bodyParser = require("body-parser");
const flash = require("express-flash");
const validator = require("express-validator");
const session = require("express-session");

 module.exports = {
    init(app, express){
      app.set("view engine", "ejs");
      app.set("views", viewsFolder);
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static(path.join(__dirname, "..", "assets"))); 
      app.use(flash());
      app.use(validator());
      app.use(session({
        secret: process.env.cookieSecret,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1.21e+9 }
      }));

      app.use((req, res, next) => {
          res.locals.currentUser = req.user;
          next();
      })
    }
 };