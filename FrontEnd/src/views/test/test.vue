<template>
    <div class="vue-test">
        <div class="operate-btn">
            <el-button @click="btnOne" type="primary">按钮一</el-button>
            <el-button @click="btnTwo" type="success">按钮二</el-button>
            <el-button @click="btnThree" type="info">按钮三</el-button>
            <el-button @click="btnFour" type="warning">按钮四</el-button>
            <el-button @click="btnFive" type="danger">按钮五</el-button>
        </div>
        <div id="canvasBox"></div>
        <div v-text="content" class="content"></div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            content: ``,
        };
    },
    mounted() {},
    methods: {
        btnOne() {
            const str: string = "likui";
            console.log('str--',str)
        },

        btnTwo() {
            console.log(666);
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
