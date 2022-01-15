"use strict";

const express = require("express");
const router = express.Router();

const Check = require("../middlewares/check");
const Project = require("../controller/project/project");

// 项目管理
router.post("/projects", Check.checkToken, Project.getProjects); // 获取项目列表
router.post("/add_project", Check.checkAdmin, Project.addProject); // 添加项目
router.post("/edit_project", Check.checkToken, Project.editProject); // 编辑项目
router.post("/edit_progress", Check.checkAdmin, Project.editProgress); // 编辑项目进度
router.post("/delete_project", Check.checkAdmin, Project.deleteProject); // 删除项目
router.post("/project_detail", Project.projectDetail); // 项目详情

module.exports = router;
