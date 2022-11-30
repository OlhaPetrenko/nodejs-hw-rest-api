/* eslint-disable no-undef */
const mongoose = require("mongoose");
const request = require("supertest");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = require("../app");
const { User } = require("../models/user");
const { DB_TEST_HOST, PORT } = process.env;

describe("test auth routes", () => {
  let server;
  beforeAll(() =>
    mongoose
      .connect(DB_TEST_HOST)
      .then(() => {
        console.log("Test database connection successful");
        server = app.listen(PORT);
      })
      .catch((error) => {
        console.log(error.message);
      })
  );
  afterAll(async () => {
    await User.deleteMany({});
    mongoose.connection.close();
    server.close();
  });

  test("test login route", async () => {
    const hashPass = await bcrypt.hash("123456", 10);
    const newUser = {
      email: "test@gmail.com",
      password: hashPass,
      avatarURL: gravatar.url("test@gmail.com"),
    };

    const userAdd = await User.create(newUser);
    const loginUser = {
      email: "test@gmail.com",
      password: "123456",
    };

    const response = await request(app)
      .post("/api/users/login")
      .send(loginUser);

    expect(response.status).toBe(200);
    const { body } = response;
    expect(body.token).toBeTruthy();
    const { token } = await User.findById(userAdd._id);
    expect(body.token).toBe(token);
    expect(body.user).toBeTruthy();
    const { user } = body;
    expect(user.email).toBe("test@gmail.com");
    expect(user.subscription).toBe("starter");
  });
});
