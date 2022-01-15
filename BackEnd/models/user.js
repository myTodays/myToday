const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    superAdmin: {
        type: Boolean,
        default: false,
    },
    create_time: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0,
    },
    birthday: {
        type: String,
        default: ""
    },
    status: {
        type: Number,
        enum: [0, 1, 2],  //0、没有权限限制  1、不可以评论  2、不可以登录
        default: 0,
    },
    token: {
        type: String,
        default: "",
    },
    
});
// 直接导出模型构造函数
module.exports = mongoose.model("User", userSchema);
