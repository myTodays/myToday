"use strict";

const DailyModel = require("../../models/daily");
const Jwt = require("../utils/jwt");
const moment = require("moment");

class Daily {
    constructor() {}
    // 我的日报列表
    async getMyDailiy(req, res, next) {
        let token = req.headers.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        console.log(result);
        try {
            const dailies = await DailyModel.find();
            let dailieyList = dailies.filter((item)=>{
                return item.user == result._id;
            });
            return res.status(200).json({
                code: 1,
                msg: "sucess",
                data: dailieyList.reverse(),
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 编辑日报
    async editDaily(req, res, next) {
        let body = req.body;
        let token = req.headers.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        try {
            const dailyInfo = await DailyModel.findOne({
                daily_adder: result.username,
                submint_time: body.submint_time,
            });
            if (!dailyInfo) {
                await new DailyModel({
                    user: result._id.toString(),
                    add_time: moment().format("YYYY-MM-DD HH:mm:ss"),
                    daily_adder: result.username,
                    submint_time: body.submint_time, //提交时间
                    update_time: moment().format("YYYY-MM-DD HH:mm:ss"), // 更新时间
                    content: body.content, //日志内容
                }).save();
                return res.status(200).json({
                    code: 1,
                    msg: "提交成功～",
                });
            } else {
                dailyInfo.update_time = moment().format("YYYY-MM-DD HH:mm:ss");
                dailyInfo.content = body.content;
                await DailyModel(dailyInfo).save();
                return res.status(200).json({
                    code: 1,
                    msg: "内容已更新～",
                });
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }

    
    // 删除日报
    async deleteDaily(req, res, next) {
        let body = req.body;
        let token = req.headers.token||req.body.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        try {
            const dailyInfo = await DailyModel.findOne({
                _id: body._id,
                user: result._id,
            });
            if (dailyInfo) {
                await DailyModel.remove({
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
    // 所有日报列表
    async getDailies(req, res, next) {
        try {
            const dailies = await DailyModel.find();
            return res.status(200).json({
                code: 1,
                msg: "sucess",
                data: dailies.reverse(),
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
}

module.exports = new Daily();
