"use strict";

const ProjectModel = require("../../models/project");
const Jwt = require("../utils/jwt");
const moment = require("moment");

class Project {
    constructor() {}

    // 项目列表
    async getProjects(req, res, next) {
        try {
            const projects = await ProjectModel.find();
            return res.status(200).json({
                code: 1,
                msg: "sucess",
                data: projects.reverse(),
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 添加项目
    async addProject(req, res, next) {
        let body = req.body;
        let token = req.headers.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        try {
            if (
                await ProjectModel.findOne({ project_name: body.project_name })
            ) {
                return res.status(200).json({
                    code: 0,
                    msg: "该项目已存在！",
                });
            }
            await new ProjectModel({
                add_time: moment().format("YYYY-MM-DD HH:mm:ss"), // 项目添加时间
                project_adder: result.username, //项目添加人
                group_leader: body.group_leader, // 技术总监
                ui_design: body.ui_design, //UI设计
                front_end: body.front_end, //前端
                bank_end: body.bank_end, // 后端
                project_notes: body.project_notes, //项目备注
                business: body.business, // 业务人员
                create_time: body.create_time, //接单时间
                project_name: body.project_name, // 项目名称
                project_price: body.project_price, //项目价格
                project_type: body.project_type, // 产品类型
                dev_type: body.dev_type, //开发类型
                dev_cycle: body.dev_cycle, // 开发周期
                description: body.description, // 项目简介
                content: body.content, // 项目内容
                preview: body.preview, //项目预览链接
            }).save();
            return res.status(200).json({
                code: 1,
                msg: "添加成功～",
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 编辑项目
    async editProject(req, res, next) {
        let body = req.body;
        try {
            const projectInfo = await ProjectModel.findOne({
                _id: body._id,
            });
            if (!projectInfo) {
                return res.status(200).json({
                    code: 0,
                    msg: "编辑失败！",
                });
            }
            (projectInfo.group_leader = body.group_leader), // 技术总监
                (projectInfo.ui_design = body.ui_design), //UI设计
                (projectInfo.front_end = body.front_end), //前端
                (projectInfo.bank_end = body.bank_end), // 后端
                (projectInfo.project_notes = body.project_notes), //项目备注
                (projectInfo.business = body.business), // 业务人员
                (projectInfo.create_time = body.create_time), //接单时间
                (projectInfo.project_name = body.project_name), // 项目名称
                (projectInfo.project_price = body.project_price), //项目价格
                (projectInfo.project_type = body.project_type), // 产品类型
                (projectInfo.dev_type = body.dev_type), //开发类型
                (projectInfo.dev_cycle = body.dev_cycle), // 开发周期
                (projectInfo.description = body.description), // 项目简介
                (projectInfo.content = body.content), // 项目内容
                (projectInfo.preview = body.preview), //项目预览链接
                await ProjectModel(projectInfo).save();
            return res.status(200).json({
                code: 1,
                msg: "编辑成功～",
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 编辑项目进度
    async editProgress(req, res, next) {
        let body = req.body;
        try {
            const projectInfo = await ProjectModel.findOne({
                _id: body._id,
            });
            if (!projectInfo) {
                return res.status(200).json({
                    code: 0,
                    msg: "编辑失败！",
                });
            }
            projectInfo.progress.u_progress = body.u_progress;
            projectInfo.progress.f_progress = body.f_progress;
            projectInfo.progress.b_progress = body.b_progress;
            await ProjectModel(projectInfo).save();
            return res.status(200).json({
                code: 1,
                msg: "已更新项目进度～",
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 项目详情
    async projectDetail(req, res, next) {
        let body = req.body;
        try {
            const projectInfo = await ProjectModel.findOne({
                _id: body._id,
            });
            if (!projectInfo) {
                return res.status(200).json({
                    code: 0,
                    msg: "空空如也～",
                });
            }
            return res.status(200).json({
                code: 1,
                msg: "success",
                data: projectInfo,
            });
        } catch (err) {
            res.status(500).json({
                code: 500,
                msg: err.message,
            });
        }
    }
    // 删除项目
    deleteProject(req, res, next) {
        console.log(req.query);
        res.status(200).json({
            code: 1,
            msg: "项目已经删除~",
        });
    }
}

module.exports = new Project();
