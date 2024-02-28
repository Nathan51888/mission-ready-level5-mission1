const request = require("supertest");
import { getCarValue } from "../src/controller/api1Controller";

describe("API 1", () => {
  it("Sunny day scenario", () => {
    const model = "Civic";
    const year = 2020;
    const expectedOutput = 6620;

    const result = getCarValue(model, year);
    expect(result).toEqual(expectedOutput);
  });
});
