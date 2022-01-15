"use strict";
const UserModel = require("../../models/user");
const Jwt = require("../utils/jwt");
const moment = require("moment");
const user = require("../../models/user");

class User {
    constructor() {}
    // 注册
    async register(req, res, next) {
        let body = req.body;
        try {
            if (await UserModel.findOne({ username: body.username })) {
                return res.status(200).json({
                    code: 0,
                    msg: "用户名已存在！",
                });
            }
            await new UserModel({
                username: body.username,
                password: body.password,
                create_time: moment().format("YYYY-MM-DD HH:mm:ss"),
            }).save();
            res.status(200).json({
                code: 1,
                msg: "注册成功～",
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 前台登录
    async login(req, res, next) {
        let body = req.body;
        try {
            const userInfo = await UserModel.findOne({
                username: body.username,
                password: body.password,
            });
            if (!userInfo) {
                return res.status(200).json({
                    code: 0,
                    msg: "用户名或密码错误！",
                });
            } else {
                let content = {
                    username: body.username.toString(),
                    isAdmin: Boolean(userInfo.isAdmin),
                    superAdmin: Boolean(userInfo.superAdmin),
                    _id: userInfo._id.toString(),
                };
                let jwt = new Jwt(content);
                let token = jwt.generateToken(); //生成token
                userInfo.token = token;
                await UserModel(userInfo).save();
                return res.status(200).json({
                    code: 1,
                    msg: "登录成功~",
                    token: token,
                    data: {
                        username: userInfo.username,
                        mobile: userInfo.mobile,
                        email: userInfo.email,
                        avatar: userInfo.avatar,
                        gender: userInfo.gender,
                        birthday: userInfo.birthday,
                    },
                });
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 后台登录
    async admin(req, res, next) {
        let body = req.body;
        try {
            const userInfo = await UserModel.findOne({
                username: body.username,
                password: body.password,
            });
            if (!userInfo) {
                return res.status(200).json({
                    code: 0,
                    msg: "用户名或密码错误!",
                });
            } else {
                if (Boolean(userInfo.isAdmin)) {
                    let content = {
                        username: body.username.toString(),
                        isAdmin: Boolean(userInfo.isAdmin),
                        superAdmin: Boolean(userInfo.superAdmin),
                        _id: userInfo._id.toString(),
                    };
                    let jwt = new Jwt(content);
                    let token = jwt.generateToken(); //生成token
                    userInfo.token = token;
                    await UserModel(userInfo).save();
                    return res.status(200).json({
                        code: 1,
                        msg: "登录成功~",
                        token: token,
                        data: {
                            username: userInfo.username,
                            mobile: userInfo.mobile,
                            superAdmin: userInfo.superAdmin,
                            email: userInfo.email,
                            avatar: userInfo.avatar,
                            gender: userInfo.gender,
                            birthday: userInfo.birthday,
                        },
                    });
                } else {
                    return res.status(200).json({
                        code: 0,
                        msg: "非管理员不可登录~",
                    });
                }
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 用户列表信息
    async getUserList(req, res, next) {
        let body = req.body;
        let token = req.headers.token || req.body.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        try {
            const userList = await UserModel.find();
            // let newUsers = userList.filter((i) => {
            //     return i.username != "myCenter";
            // });
            if (Boolean(result.superAdmin)) {
                return res.status(200).json({
                    code: 1,
                    msg: "success",
                    data: userList,
                });
            } else {
                userList.forEach((u) => {
                    u.password = "";
                });
                return res.status(200).json({
                    code: 1,
                    msg: "success",
                    data: userList,
                });
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 更新用户信息
    updateUserInfo(req, res, next) {
        console.log(111, req.query);
        let data = {
            code: 1,
            msg: "网站数据已更新666~",
        };
        res.status(200).json(data);
    }
    // 删除用户
    async deleteUser(req, res, next) {
        let body = req.body;
        let token = req.headers.token || req.body.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        try {
            const userInfo = await UserModel.findOne({
                _id: body._id,
            });
            if (!userInfo) {
                return res.status(200).json({
                    code: 0,
                    msg: "删除失败～",
                });
            } else {
                if (Boolean(result.superAdmin)) {
                    if (userInfo.username == "李魁") {
                        return res.status(200).json({
                            code: 0,
                            msg: "此账号不能删哦～",
                        });
                    } else {
                        await UserModel.remove({
                            _id: body._id,
                        });
                        return res.status(200).json({
                            code: 1,
                            msg: "删除成功～",
                        });
                    }
                } else {
                    return res.status(200).json({
                        code: 0,
                        msg: "暂无此权限～",
                    });
                }
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 加密
    encryption(password) {
        const newpassword = this.Md5(
            this.Md5(password).substr(2, 7) + this.Md5(password)
        );
        return newpassword;
    }
}
module.exports = new User();
