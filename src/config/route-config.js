module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const reviewRoutes = require("../routes/reviews");
    const productRoutes = require("../routes/products");
    const serviceRoutes = require("../routes/services");
    const cartIemRoutes = require("../routes/cartItems");

    if(process.env.NODE_ENV === "test") {
      const mockAuth = require("../../spec/support/mock-auth.js");
      mockAuth.fakeIt(app);
    }
  
    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(reviewRoutes);
    app.use(productRoutes);
    app.use(serviceRoutes);
    app.use(cartIemRoutes);
  
  }
}