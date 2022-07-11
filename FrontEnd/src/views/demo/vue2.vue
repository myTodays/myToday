<template>
    <div class="vue-test">
        <div id="canvasBox"></div>
        <div class="operate-btn">
            <el-button @click="btnOne" type="primary">按钮一</el-button>
            <el-button @click="btnTwo" type="success">按钮二</el-button>
            <el-button @click="btnThree" type="info">按钮三</el-button>
            <el-button @click="btnFour" type="warning">按钮四</el-button>
            <el-button @click="btnFive" type="danger">按钮五</el-button>
        </div>
        <div v-text="content" class="content"></div>
    </div>
</template>

<script>
import Draw from "../../common/js/Draw";
export default {
    data() {
        return {
            content: ``,
        };
    },
    mounted() {},
    methods: {
        async getPictrue() {
        // 海报配置
        let config = {
            canvasId: "canvasBox",
            type: "Poster", //Poster(海报)，QRcode(二维码),Charts(图表)
            width: 375,
            height: 600,
            // background: "#fff",
            border: "1px solid #f00",
        };
        // 海报数据
        let data = {
            source: "东方屹腾",
            nickname: "任鹏飞", //昵称
            department: "520特惠", // 部门
            position: "媳妇不在身边，今晚可出租，扫码交易。", // 职位
            avatar: require("@/assets/poster/rpf/avatar.jpeg"), // 用户头像
            coverSrc:require("@/assets/poster/rpf/poster.jpeg"), // 分享封面背景图
            QRcodeSrc:require("@/assets/poster/rpf/qrcode.jpeg")
            };
        let result = await new Draw.Poster(config, data).init();
        console.log('result',result);
    },
        btnOne() {
            this.getPictrue()
            // const set = new Set();
            // set.add(1).add(2).add(3).add(3);
            // console.log(set.has(2));
            // console.log(set.has(5));
            // console.log(set.delete(2));
            // console.log(set.has(2));
            // console.log([...set]);
            // console.log(set.size);
            // let promise = new Promise((res, err) => {});
        },

        btnTwo() {
            // console.log(666)
            return 666;
        },
        btnThree() {},
        btnFour() {},
        btnFive() {},
    },
};
</script>

<style lang="scss" scoped>
.vue-test {
    width: 90vw;
    height: 90vh;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 10000;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #fff, $alpha: 0.8);
    padding: 20px;
    border-radius: 4px;
    .operate-btn {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .content {
        width: calc(90vw - 40px);
        height: calc(90vh - 95px);
        border-radius: 4px;
        margin-top: 20px;
        border: 1px solid #999;
        background-color: #fff;
        padding: 15px;
    }
}
.el-button--small {
    height: 4.5vh;
    width: 15vw;
}
</style>
