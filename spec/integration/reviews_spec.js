const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/reviews/";
const sequelize = require("../../src/db/models/index").sequelize;
const Review = require("../../src/db/models").Review;
const User = require("../../src/db/models").User;


describe("routes : reviews", () => {

  describe("Review CRUD actions for members", () => {

    beforeEach((done) => {
      this.user;
      this.review;
      
      sequelize.sync({ force: true }).then(() => {
        User.create({
          name: "Mike Jordan",
          email: "goat@mail.com",
          password: "123456",
          role: "member"
        })
        .then((user) => {
          this.user = user;
        
        Review.create({
          title: "My Review",
          body: "Very good job",
          userId: user.id
        })
        .then((review) => {
          this.review = review;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })
     });
    });
    

    describe("GET /reviews", () => {

      it("should render all reviews", (done) => {
        request.get(base, (err, res, body) => {
          expect(err).toBeNull();
          done();
        });
      });

    });

    describe("GET /reviews/form", () => {

      it("should render the new review form", (done) => {
        request.get(`${base}form`, (err, res, body) => {
          expect(err).toBeNull();
          // expect(body).toContain("Leave Your Review");
          done();
        });
      });
    });

    describe("POST /reviews/form", () => {
      const options = {
        url: `${base}form`,
        form: {
          title: "Great Review",
          body: "Five stars!",
          userId: 1
        }
      };

      it("should create a new review", (done) => {
        request.post(options,
          (err, res, body) => {
            Review.findOne({where: {title: "Great Review"}})
             .then((review) => {
               expect(review.title).toBe("Great Review");
               expect(review.body).toBe("Five stars!");
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

    describe("GET /reviews/:id", () => {

      it("should render the selected review", (done) => {
        request.get(`${base}${this.review.id}`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("My Review");
          done();
        });
      });

    });

    describe("POST /reviews/:id/destroy", () => {

      it("should delete the selected reviews", (done) => {
        Review.findAll()
        .then((reviews) => {
          const reviewCountBeforeDelete = reviews.length;

          expect(reviewCountBeforeDelete).toBe(1);

          request.post(`${base}${this.review.id}/destroy`, (err, res, body) => {
            Review.findAll()
             .then((reviews) => {
               expect(err).toBeNull();
               expect(reviews.length).toBe(reviewCountBeforeDelete - 1);
               done();
            })
          });
        })
      });
    });

    describe("GET /reviews/:id/edit", () => {

      it("should render a form to edit the selected review", (done) => {
        request.get(`${base}${this.review.id}/edit`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Edit Your Review");
          expect(body).toContain("My Review");
          done();
        });
      });
    });

    describe("POST /reviews/:id/update", () => {

      it("should update the review with the new input", (done) => {
        request.post({
          url: `${base}${this.review.id}/update`,
          form: {
            title: "My Updated Review",
            body: "I still loved our party"
          }
        }, (err, res, body) => {
          expect(err).toBeNull();
          Review.findOne({
            where: {id:1}
          })
          .then((review) => {
            expect(review.title).toBe("My Updated Review");
            done();
          });
        });
      });
    });
  
  });






  


  describe("guest user performing CRUD actions for Reviews", () => {

    beforeEach((done) => {
      this.user;
      this.review;
      
      sequelize.sync({ force: true }).then(() => {
        User.create({
          name: "Air Jordan",
          email: "air@mail.com",
          password: "abc123",
          role: "guest"
        })
        .then((user) => {
          this.user = user;
        
        Review.create({
          title: "My Review",
          body: "Very good job",
          userId: user.id
        })
        .then((review) => {
          this.review = review;
          done();
        })
      })
     });
    });

    describe("GET /reviews", () => {

      it("should render the review page with all reviews", (done) => {
        request.get(base, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Customer Reviews");
          done();
        });
      });

    });

    describe("GET /reviews/form", () => {

      it("should not render the new review form", (done) => {
        request.get(`${base}form`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).not.toContain("Leave Your Review")
          done();
        });
      });

    });

    describe("POST /reviews/form", () => {
      const options = {
        url: `${base}form`,
        form: {
          title: "A review",
          body: "A really good review"
        }
      }

      it("should not create a new review", (done) => {
        request.post(options,
          (err, res, body) => {
            Review.findOne({where: {title: "A review"}})
            .then((review) => {
              expect(review).toBeNull();
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

    describe("GET /reviews/:id", () => {

      it("should not render a view of the review", (done) => {
        
        request.get(`${base}${this.review.id}`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toBeNull();
          done();
        });
      });
    });

    describe("POST /reviews/:id/destroy", () => {

      it("should not delete the selected review", (done) => {

        Review.findAll()
        .then((reviews) => {
          const reviewCountBeforeDelete = reviews.length;

          expect(reviewCountBeforeDelete).toBe(1);

          request.post(`${base}${this.review.id}/destroy`, (err, res, body) => {
            Review.findAll()
            .then((reviews) => {
              expect(reviews.length).toBe(reviewCountBeforeDelete);
              done();
            })
          });
        })
      });
    });

    describe("GET /reviews/:id/edit", () => {

      it("should not render a view of the edit review form", (done) => {

        request.get(`${base}${this.review.id}/edit`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).not.toContain("A review");
          done();
        });
      });
    });

    describe("POST /reviews/:id/update", () => {

      it("should not update the review with the given data", (done) => {
        const options = {
          url: `${base}${this.review.id}/update`,
          form: {
            title: "Tim's Review",
            body: "This is Tim's review"
          }
        }

        request.post(options,
        (err, res, body) => {
          expect(err).toBeNull();
          Review.findOne({
            where: { id:1 }
          })
          .then((review) => {
            expect(review.title).toBe("My Review");
            done();
          });
        });
      });

    });

  });

});
