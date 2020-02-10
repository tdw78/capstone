const Review = require("../../src/db/models").Review;
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;


describe("Review", () => {

    beforeEach(() => {
      this.user;

       sequelize.sync({force: true})
       .then((res) => {
          User.create({
            name: "Jose",
            email: "canseco@mail.com",
            password: "bashbro"
          })
          .then((user) => {
            this.user = user;
          })
       })
    });

   describe("#create()", () => {
     it("should create a new review", (done) => {
         Review.create({
           title: "Test Review",
           body: "Great Party",
           userId: 2
         })
         .then((review) => {
           expect(review.title).toBe("Test Review"),
           done();
         })
         .catch((err) => {
           console.log(err);
           done();
         });
     });
   });
});