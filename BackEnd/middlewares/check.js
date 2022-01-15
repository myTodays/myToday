"use strict";

const UserModel = require("../models/user");
const Jwt = require("../controller/utils/jwt");

class Check {
    constructor() {}
    // 检测是否带token
    async checkToken(req, res, next) {
        let token = req.headers.token || req.body.token || req.query.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        if (result == "err") {
            return res.status(200).json({
                code: 666,
                msg: "亲，您还没有登录!",
            });
        } else {
            const userInfo = await UserModel.findOne({
                username: result.username,
            });
            if (token.toString() == userInfo.token.toString()) {
                next();
            } else {
                return res.status(200).json({
                    code: 0,
                    msg: "登录失效，请重新登录!",
                });
            }
        }
    }
    // 检测是否为管理员
    async checkAdmin(req, res, next) {
        let token = req.headers.token || req.body.token || req.query.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        if (result == "err") {
            return res.status(200).json({
                code: 666,
                msg: "亲，您还没有登录!",
            });
        } else {
            const userInfo = await UserModel.findOne({
                username: result.username,
            });
            if (
                token.toString() == userInfo.token.toString() &&
                Boolean(userInfo.isAdmin)
            ) {
                next();
            } else {
                return res.status(200).json({
                    code: 0,
                    msg: "非管理员，暂无权限!",
                });
            }
        }
    }
    // 检测是否为超级管理员
    async checkSuperAdmin(req, res, next) {
        let token = req.headers.token || req.body.token || req.query.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        if (result == "err") {
            return res.status(200).json({
                code: 666,
                msg: "登录失效，请重新登录!",
            });
        } else {
            const userInfo = await UserModel.findOne({
                username: result.username,
            });
            if (
                token.toString() == userInfo.token.toString() &&
                Boolean(userInfo.isAdmin) &&
                Boolean(userInfo.superAdmin)
            ) {
                next();
            } else {
                return res.status(200).json({
                    code: 0,
                    msg: "非超级管理员，无此权限！",
                });
            }
        }
    }
}
module.exports = new Check();
