"use strict";

const express = require("express");
const router = express.Router();

const Check = require("../middlewares/check");
const Message = require("../controller/message/message");

// 留言管理
router.post("/message_lists", Message.getMessages); // 获取所有留言列表
router.post("/edit_message", Check.checkToken, Message.editMessage); // 编辑留言
router.post("/delete_message", Check.checkSuperAdmin, Message.deleteMessage); // 删除留言

module.exports = router;
