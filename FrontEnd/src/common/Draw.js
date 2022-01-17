"use strict";

/**
 *@author: LK
 *@desc: 基于Canvas绘制图形
 */

// 绘制图形
// config:{
//     canvasId: "canvasBox",
//     type: "Poster", //Poster(海报), QRcode(二维码), Charts(图表)
//     width: 300,
//     height: 500,
//     background: "#fff",
//     border: "1px solid #ddd",
// }

class Draw {
    constructor(config) {
        this.canvas = null;
        this.config = {
            canvasId: config.canvasId,
            type: config.type,
            width: config.width || 360,
            height: config.height || 650,
            background: config.background || "#fff",
            border: config.border || "none",
        };
    }
    // 初始化绘图
    init() {
        let ctx = this.initCanvas();
        if (this.config.type.includes("Charts")) {
            this.drawType(ctx);
        } else {
            return this.drawType(ctx);
        }
    }
    // 初始化canvas
    initCanvas() {
        let myContent = document.getElementById(this.config.canvasId);
        myContent.innerHTML = null;
        let ratio = window.devicePixelRatio || 1;
        this.canvas = document.createElement("canvas");
        myContent.appendChild(this.canvas);
        this.canvas.setAttribute("id", "canvasDrawContent");
        this.canvas.width = this.config.width * ratio;
        this.canvas.height = this.config.height * ratio;
        this.canvas.style.width = `${this.config.width}px`; 
        this.canvas.style.height = `${this.config.height}px`;
        this.canvas.style.background = this.config.background;
        this.canvas.style.border = this.config.border;
        this.canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        let canvasBox = document.getElementById("canvasDrawContent");
        let ctx = canvasBox.getContext("2d");
        ctx.fillStyle = this.config.background;
        ctx.fillRect(0, 0, this.config.width, this.config.height);
        return ctx;
    }
    // 绘制类型
    drawType(ctx) {
        switch (this.config.type) {
            case "Poster":
                return this.drawPoster(ctx);
            case "QRcode":
                return this.drawQRcode(ctx);
            // break;
            case "Charts":
                this.drawCharts(ctx);
                break;
            default:
                console.warn("绘制类型错误！");
                break;
        }
    }
}

// 海报
// data:{
//     nickname: "", //昵称
//     department: "", // 部门
//     position: "", // 职位
//     avatar: "", // 用户头像
//     coverSrc: "", // 分享封面背景图
//     QRcodeSrc: "", // 分享二维码图片
// }
const Poster = class Poster extends Draw {
    constructor(config, data) {
        super(config);
        this.data = data;
    }
    drawPoster(ctx) {
        const W = this.config.width;
        const H = this.config.height;
        const RATIO = 0.75;
        const PD = H / 80;
        // 封面
        const cImg = new Image();
        cImg.src = this.data.coverSrc;
        cImg.setAttribute("crossOrigin", "anonymous");
        cImg.onload = () => {
            ctx.drawImage(cImg, PD, PD, W - 2 * PD, H * RATIO);
        };
        // 用户头像
        const aImg = new Image();
        aImg.src = this.data.avatar;
        aImg.setAttribute("crossOrigin", "anonymous");
        aImg.onload = () => {
            ctx.drawImage(aImg, PD, H * RATIO + 3 * PD, H / 12, H / 12);
        };
        // 二维码
        const qImg = new Image();
        qImg.src = this.data.QRcodeSrc;
        qImg.setAttribute("crossOrigin", "anonymous");
        qImg.onload = () => {
            ctx.drawImage(
                qImg,
                W - PD - H / 10,
                H * RATIO + 3 * PD,
                H / 10,
                H / 10
            );
        };
        ctx.font = `${H / 36}px Arial`;
        ctx.fillStyle = "#000";
        ctx.fillText(this.data.nickname, 2.5 * PD + H / 12, H * RATIO + 5 * PD);

        ctx.font = `${H / 50}px Arial`;
        ctx.fillStyle = "#666";
        ctx.fillText(
            this.data.department,
            2.5 * PD + H / 12,
            H * RATIO + 8 * PD
        );
        ctx.fillText(
            this.data.position,
            2.5 * PD + H / 12,
            H * RATIO + 11 * PD
        );
        if (this.data.source) {
            ctx.font = `${H / 60}px Arial`;
            ctx.textAlign = "center";
            ctx.fillStyle = "#bbb";
            ctx.fillText(
                `——————  ${this.data.source}  ——————`,
                W / 2,
                H - 2 * PD + 2,
                W - 2 * PD
            );
        }
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let res = this.canvas.toDataURL("image/jpeg");
                res ? resolve(res) : reject(err);
            }, 300);
        });
        return promise;
    }
};

// 二维码
// data:{
//     url:'',
//     desc:''
// }
const QRcode = class QRcode extends Draw {
    constructor(config, data) {
        super(config);
        this.data = data;
    }
    drawQRcode(ctx) {
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
        return "二维码绘制";
    }
};

// 图表
// data:{
// }
const Charts = class Charts extends Draw {
    constructor(config, data, type) {
        super(config);
        this.data = data;
        this.type = type;
    }
    drawCharts(ctx) {
        switch (this.type) {
            case "Line":
                this.drawLine(ctx);
                break;
            case "Pie":
                this.drawCharts(ctx);
                break;
            default:
                console.error("图表类型错误！");
                break;
        }
    }
    // 绘制折线图
    drawLine(ctx) {
        console.log("绘制折线图");
    }
    // 绘制饼图
    drawPie(ctx) {
        console.log("绘制饼图");
    }
};

export default {
    Poster, // 海报
    QRcode, // 二维码
    Charts, // 图表
};
