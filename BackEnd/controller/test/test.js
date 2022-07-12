"use strict";

const mock = require('./mock.js')
const moment = require("moment");

class Test {
    constructor() {}
    async mockData(req, res, next) {
        console.log(req.headers.options);
        res.status(200).json({
            code: 1,
            msg: "sucess",
            data: mock,
        });
    }
}
module.exports = new Test();
