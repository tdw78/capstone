const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/";

describe("routes : static", () => {

  describe("GET /", () => {
    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {
       
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Dream Party");
        expect(err).toBeNull();
        done();
      });
    });
  });
});