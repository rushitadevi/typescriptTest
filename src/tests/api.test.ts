import request from "supertest";
import app from "../index";

describe("API Tests", () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World!");
  });
});
