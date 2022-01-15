"use strict";

const express = require("express");
const router = express.Router();

const Check = require("../middlewares/check");
const User = require("../controller/user/user");

router.post("/user_register", User.register); // 用户注册
router.post("/user_login", User.login); // 用户登录


router.post("/admin/user_login", User.admin); // 管理员后台登录
router.post("/user_lists", Check.checkToken, User.getUserList); // 用户列表
router.post("/delete_user", Check.checkSuperAdmin, User.deleteUser); // 删除用户

// router.post("/update_user_info", User.updateUserInfo); // 更新用户信息
// router.post("/user_info", User.userInfo); // 获取用户信息

module.exports = router;
