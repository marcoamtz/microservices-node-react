import request from "supertest";
import { app } from "../../app";

it("has a route handler listening to /api/tickets for post requests", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).not.toEqual(404);
});

it("can only be accesed if the user is signed in", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).toEqual(401);
});
it("returns a status other than 401 if the user is signed in", async () => {
  const response = await request(app).post("/api/tickets").set("Cookie", signin()).send({});

  expect(response.status).not.toEqual(401);
});

it("returns an error if an invalida title is provided", async () => {});

it("returns an error if an invalid price is provided", async () => {});

it("created a ticket with valid inputs", async () => {});
