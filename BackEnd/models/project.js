const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    // 关联字段--用户ID
    user: {
        type: mongoose.Schema.Types.ObjectId, // 类型
        ref: "User", // 引用
    },
    project_adder:{ type: String, default:'' }, //项目添加人
    add_time: { type: String}, // 添加时间
    progress: { 
        u_progress:{ type: Number, default: 0 }, //UI进度
        f_progress:{ type: Number, default: 0 }, //前端进度
        b_progress:{ type: Number, default: 0 }, //后端进度
     }, // 项目进度
    group_leader: { type: String, default: "" }, // 技术总监
    ui_design: { type: String, default: "" }, //UI设计
    front_end: { type: String, default: "" }, //前端
    bank_end: { type: String, default: "" }, // 后端
    project_notes: { type: String, default: "" }, // 项目备注

    business: { type: String, default: "" }, // 业务人员
    create_time: { type: String, default: "" }, // 接单时间
    project_name: { type: String, default: "" }, // 项目名称
    project_price: { type: String, default: "" }, // 项目价格
    project_type: { type: String, default: "App" }, // 产品类型
    dev_type: { type: String, default: "专业定制" }, // 开发类型
    dev_cycle: { type: String, default: "" }, // 开发周期
    description: { type: String, default: "" }, // 项目简介
    content: { type: String, default: "" }, // 项目详细
    preview: { type: String, default: "" }, //项目预览链接
});
// 直接导出模型构造函数
module.exports = mongoose.model("Project", projectSchema);

