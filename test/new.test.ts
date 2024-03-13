const request = require("supertest");

describe("API 1", () => {
    it("Sunny day scenario", () => {
        const model = "Civic";
        const year = 2020;
        const expectedOutput = 6620;

        return request("http://localhost:8080/api/1")
            .post('/')
            .send({ model: model, year: year })
            .expect(200)
            .then(res => {
                expect(res.body.carValue).toEqual(expectedOutput)
            })
    });
    it("Empty json", () => {
        return request("http://localhost:8080/api/1")
            .post('/')
            .send({})
            .expect(400)
            .then(res => {
                expect(res.body.error).toEqual("missing params")
            })
    });
    it("Only model", () => {
        return request("http://localhost:8080/api/1")
            .post('/')
            .send({ model: "Civic" })
            .expect(400)
            .then(res => {
                expect(res.body.error).toEqual("missing params")
            })
    });
    it("Only year", () => {
        return request("http://localhost:8080/api/1")
            .post('/')
            .send({ year: 2020 })
            .expect(400)
            .then(res => {
                expect(res.body.error).toEqual("missing params")
            })
    });
    it("Year is string", () => {
        const model = "Civic";
        const year = "wrong format";

        return request("http://localhost:8080/api/1")
            .post('/')
            .send({ model: model, year: year })
            .expect(400)
            .then(res => {
                expect(res.body.error).toEqual("year is not a number")
            })
    });
    it("Model has symbols and spaces", () => {
        const model = ` C{)iv .,/ic .'&`;
        const year = 2020;
        const expectedOutput = 6620;

        return request("http://localhost:8080/api/1")
            .post('/')
            .send({ model: model, year: year })
            .expect(200)
            .then(res => {
                expect(res.body.carValue).toEqual(expectedOutput)
            })
    });
    it("Year has decimals", () => {
        const model = "Civic";
        const year = 20.20;

        return request("http://localhost:8080/api/1")
            .post('/')
            .send({ model: model, year: year })
            .expect(400)
            .then(res => {
                expect(res.body.error).toEqual("year can't have decimal points")
            })
    });
});



/*

sunny day: correct info
missing params
year not number
model not string
model has symbols
model has space
year has decimals


*/
