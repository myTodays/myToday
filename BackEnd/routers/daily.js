"use strict";

const express = require("express");
const router = express.Router();

const Check = require("../middlewares/check");
const Daily = require("../controller/daily/daily");

// 项目管理(手机端)
router.post("/my_daily_lists", Check.checkToken, Daily.getMyDailiy); // 获取我的日报列表
router.post("/edit_daily", Check.checkToken, Daily.editDaily); // 编辑日报

// 项目管理(PC端)
router.post("/daily_lists", Check.checkAdmin, Daily.getDailies); // 获取所有日报列表
router.post("/delete_daily", Check.checkAdmin, Daily.deleteDaily); // 删除日报

module.exports = router;
