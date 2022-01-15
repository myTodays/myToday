"use strict";

const MessageModel = require("../../models/message");
const Jwt = require("../utils/jwt");
const moment = require("moment");

class Message {
    constructor() {}
    // 所有留言列表
    async getMessages(req, res, next) {
        try {
            const messagesList = await MessageModel.find();
            let msgList = messagesList.map((i) => {
                return (i = {
                    msg_adder: i.msg_adder,
                    content: i.content,
                    add_time: i.add_time,
                    _id: i._id,
                });
            });
            return res.status(200).json({
                code: 1,
                msg: "sucess",
                data: msgList.reverse(),
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 添加留言
    async editMessage(req, res, next) {
        let body = req.body;
        let token = req.headers.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        try {
            await new MessageModel({
                user: result._id.toString(),
                add_time: moment().format("YYYY-MM-DD HH:mm:ss"),
                msg_adder: result.username,
                content: body.content,
            }).save();
            return res.status(200).json({
                code: 1,
                msg: "留言成功～",
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 删除留言
    async deleteMessage(req, res, next) {
        let body = req.body;
        try {
            const messageInfo = await MessageModel.findOne({
                _id: body._id,
            });
            if (messageInfo) {
                await MessageModel.remove({
                    _id: body._id,
                });
                return res.status(200).json({
                    code: 1,
                    msg: "删除成功～",
                });
            } else {
                return res.status(200).json({
                    code: 0,
                    msg: "删除失败～",
                });
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
}

module.exports = new Message();
