const request = require("supertest");
const app = require("./server");

describe('blue', () => {
  describe("/", () => {
    test("GET", () => {
      return request(app)
        .get("/")
        .expect(200);
    });
  });
});