const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/products/";

describe("routes : products", () => {

  describe("GET /products/tables_chairs", () => {
    it("should render the tables and chairs options page", (done) => {
       request.get(`${base}tables_chairs`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Tables and Chairs");
          done();
       });
    });
  });

  describe("GET /products/centerpieces", () => {
    it("should render the centerpiece options page", (done) => {
       request.get(`${base}centerpieces`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Centerpieces");
          done();
       });
    });
  });

  describe("GET /products/invitations", () => {
    it("should render the invitations options page", (done) => {
       request.get(`${base}invitations`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Wedding Invitations");
          done();
       });
    });
  });

  describe("GET /products/bouquets", () => {
    it("should render the bouquets options page", (done) => {
       request.get(`${base}bouquets`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Bridal Bouquets");
          done();
       });
    });
  });

})

