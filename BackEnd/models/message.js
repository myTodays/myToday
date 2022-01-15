const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    // 关联字段--用户ID
    user: {
        type: mongoose.Schema.Types.ObjectId, // 类型
        ref: "User", // 引用
    },
    msg_adder: { type: String, default: "" }, //留言者
    add_time: { type: String }, // 留言时间
    content: {
        type: String,
        required: true,
    },
});
// 直接导出模型构造函数
module.exports = mongoose.model("Message", messageSchema);
