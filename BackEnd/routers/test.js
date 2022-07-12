"use strict";

const express = require("express");
const router = express.Router();

const Test = require("../controller/test/test");

router.post("/test", Test.mockData); 

module.exports = router;
