const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/services/";

describe("routes : services", () => {

  describe("GET /services/photography", () => {
    it("should render the photography options page", (done) => {
      request.get(`${base}photography`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Photography Styles");
        done();
     });
    });
  });
  describe("GET /services/music", () => {
    it("should render the music options page", (done) => {
      request.get(`${base}music`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Music Options");
        done();
     });
    });
  });
  describe("GET /services/limos", () => {
    it("should render the limousine options page", (done) => {
      request.get(`${base}limos`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Limousines");
        done();
     });
    });
  });
  describe("GET /services/catering", () => {
    it("should render the catering options page", (done) => {
      request.get(`${base}catering`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Dinners and Appetizers");
        done();
     });
    });
  });

})
