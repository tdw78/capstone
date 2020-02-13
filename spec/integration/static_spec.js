const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/";

describe("routes : static", () => {

  describe("GET /", () => {
    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {
       
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("The Party Planners");
        expect(err).toBeNull();
        done();
      });
    });
  });
  describe("GET /gallery", () => {
    it("should render the gallery page", (done) => {
       request.get(`${base}gallery`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Gallery");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /gallery/decorations", () => {
    it("should render the decorations album", (done) => {
       request.get(`${base}gallery/decorations`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Decorations");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /gallery/cakes", () => {
    it("should render the cakes album", (done) => {
       request.get(`${base}gallery/cakes`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Wedding Cakes");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /gallery/catering", () => {
    it("should render the catering album", (done) => {
       request.get(`${base}gallery/catering`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Catering");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /gallery/dresses", () => {
    it("should render the dresses album", (done) => {
       request.get(`${base}gallery/dresses`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Bridesmaid Dresses");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /gallery/reception", () => {
    it("should render the reception album", (done) => {
       request.get(`${base}gallery/reception`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Receptions");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /gallery/invitations", () => {
    it("should render the invitations album", (done) => {
       request.get(`${base}gallery/invitations`, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          expect(body).toContain("Wedding Invitations");
          expect(err).toBeNull();
          done();
       });
    });
  });
  describe("GET /products_services", () => {
     it("should render the products and services index page", (done) => {
       request.get(`${base}products_services`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("Our Products and Services");
          done();
       });
     });
  });
});