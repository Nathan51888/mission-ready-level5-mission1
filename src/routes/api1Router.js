const express = require("express");
const router = express.Router();
const api1Controller = require("../controller/api1Controller");

router.post("/", api1Controller.getCarValue);

module.exports = router;
