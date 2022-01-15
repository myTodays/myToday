const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dailySchema = new Schema({
    // 关联字段--用户ID
    user: {
        type: mongoose.Schema.Types.ObjectId, // 类型
        ref: "User", // 引用
    },
    daily_adder: { type: String, default: "" }, //日报添加人
    submint_time: { type: String, default: "" }, //添加时间
    add_time: { type: String }, // 添加时间
    update_time: { type: String, default: "" }, // 更新时间
    content: { type: String, default: "" }, // 日报内容
});
// dailySchema.index({id: 1});
// 直接导出模型构造函数
module.exports = mongoose.model("Daily", dailySchema);
