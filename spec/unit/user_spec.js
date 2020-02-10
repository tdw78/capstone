const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("User", () => {

  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe("#create()", () => {
    it("should create a new user account", (done) => {
        User.create({
          name: "Timbo",
          email: "timbo@mail.com",
          password: "abc123"
        })
        .then((user) => {
          expect(user.name).toBe("Timbo");
          expect(user.email).toBe("timbo@mail.com");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });

     it("should not creat a user with input that doesn't meet validation standards", (done) => {
         User.create({
           name: "Timbo",
           email: "timbo@mail.com",
           password: "123"
         })
         .then((user) => {
            done();
         })
         .catch((err) => {
           expect(err.message).toContain("Validation error: must be a valid password");
           done();
         });
     });

     it("should not create a user with an email already taken", (done) => {
          User.create({
            name: "Tiger",
            email: "email@email.com",
            password: "123XYZ"
        })
        .then((user) => {
          User.create({
            name: "Joey",
            email: "email@email.com",
            password: "abcdefg"
        })
         .then((user) => {      
          done();
        })
        .catch((err) => {
         expect(err.message).toContain("Validation error");
         done();
       });
         done();
       })
       .catch((err) => {
        console.log(err);
        done();
      });
    });
  });
});