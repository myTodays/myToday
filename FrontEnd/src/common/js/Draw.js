"use strict";

/**
 * @author: LK
 * @desc: 基于Canvas绘制海报
 **/

// 绘制海报基本配置
// config:{
//     canvasId: "canvasBox",
//     type: "Poster", 绘制类型: Poster，QRcode
//     style: "style1", 海报样式: style1,style2,style3
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
            type: config.type || "Poster",
            style: config.style || "style1",
            width: config.width || 375,
            height: config.height || 667,
            background: config.background || "#fff",
            border: config.border || "none",
        };
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
    // 初始化绘图
    init() {
        let ctx = this.initCanvas();
        switch (this.config.type) {
            case "Poster":
                return this.drawPoster(ctx);
            case "QRcode":
                return this.drawQRcode(ctx);
            default:
                console.warn("绘制类型错误！");
                break;
        }
    }
}

// 海报参数
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
    // 绘制海报样式
    drawPoster(ctx) {
        // 基础数据配置BaseNumber
        const BN = {
            W: this.config.width,
            H: this.config.height,
            RATIO: 0.75,
            PD: this.config.height / 80,
        };
        switch (this.config.style) {
            case "style1":
                return this.drawStyle1(ctx, BN);
            case "style2":
                return this.drawStyle2(ctx, BN);
            case "style3":
                return this.drawStyle3(ctx, BN);
            default:
                console.warn("暂无此海报样式！");
                break;
        }
    }
    // 海报样式1
    drawStyle1(ctx, BN) {
        // 海报封面
        const cImg = new Image();
        cImg.src = this.data.coverSrc;
        cImg.setAttribute("crossOrigin", "anonymous");
        cImg.onload = () => {
            ctx.drawImage(
                cImg,
                BN.PD,
                BN.PD,
                BN.W - 2 * BN.PD,
                BN.H * BN.RATIO
            );
        };
        // 用户头像
        const aImg = new Image();
        aImg.src = this.data.avatar;
        aImg.setAttribute("crossOrigin", "anonymous");
        aImg.onload = () => {
            ctx.drawImage(
                aImg,
                BN.PD,
                BN.H * BN.RATIO + 3 * BN.PD,
                BN.H / 12,
                BN.H / 12
            );
        };
        // 二维码
        const qImg = new Image();
        qImg.src = this.data.QRcodeSrc;
        qImg.setAttribute("crossOrigin", "anonymous");
        qImg.onload = () => {
            ctx.drawImage(
                qImg,
                BN.W - BN.PD - BN.H / 10,
                BN.H * BN.RATIO + 3 * BN.PD,
                BN.H / 10,
                BN.H / 10
            );
        };
        ctx.font = `${BN.H / 36}px Arial`;
        ctx.fillStyle = "#000";
        ctx.fillText(
            this.data.nickname,
            2.5 * BN.PD + BN.H / 12,
            BN.H * BN.RATIO + 5 * BN.PD
        );

        ctx.font = `${BN.H / 50}px Arial`;
        ctx.fillStyle = "#666";
        ctx.fillText(
            this.data.department,
            2.5 * BN.PD + BN.H / 12,
            BN.H * BN.RATIO + 8 * BN.PD
        );
        ctx.fillText(
            this.data.position,
            2.5 * BN.PD + BN.H / 12,
            BN.H * BN.RATIO + 11 * BN.PD
        );
        if (this.data.source) {
            ctx.font = `${BN.H / 60}px Arial`;
            ctx.textAlign = "center";
            ctx.fillStyle = "#bbb";
            ctx.fillText(
                `——————  ${this.data.source}  ——————`,
                BN.W / 2,
                BN.H - 2 * BN.PD + 2,
                BN.W - 2 * BN.PD
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
    // 海报样式2
    drawStyle2(ctx, BN) {
        console.log("样式2--", ctx, BN);
    }
    // 海报样式3
    drawStyle3(ctx, BN) {
        console.log("样式3--", ctx, BN);
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

export default {
    Poster, // 海报
    QRcode, // 二维码
};
