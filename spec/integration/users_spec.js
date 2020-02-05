const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/users/";
const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {

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

  describe("GET /users/signUp", () => {
    it("should render the sign up form", (done) => {
      request.get(`${base}signUp`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Become a Member!");
        done();
      });
    });

  });
  describe("POST /users", () => {
    it("should create a new user", (done) => {
    
      const options = {
        url: base,
        form: {
          name: "Tim",
          email: "tim@mail.com",
          password: "password"
      }
    }
       request.post(options,
          (err, res, body) => {
              User.findOne({where: {email: "tim@mail.com"}})
              .then((user) => {
                expect(user).not.toBeNull();
                expect(user.email).toBe("tim@mail.com");
                expect(user.id).toBe(1);
                done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });
            }
          );
        });
        it("should not create a user with invalid input", (done) => {
          request.post(
            {
              url: base,
              form: {
                name: "Timmy",
                email: "myemail@mail.com",
                password: "pass"
              }
            },
            (err, res, body) => {
              User.findOne({where: {email: "myemail@mail.com"}})
                .then((user) => {
                  expect(user).toBeNull();
                  done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });
            }
          );
        });
      });
      describe("GET /users/signIn", () => {

        it("should render the sign in form", (done) => {
          request.get(`${base}signIn`, (err, res, body) => {
            expect(err).toBeNull();
            expect(body).toContain("Please Sign In");
            done();
          });
        });
      });
     
});