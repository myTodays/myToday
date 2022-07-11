<template>
    <div class="vue-test">
        <div class="operate-btn">
            <div @click="onClick" class="btn">执行</div>
        </div>
        <div class="content">{{ content }}</div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            content: ``,
        };
    },
    methods: {
        onClick() {
        },
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
        justify-content: center;
        align-items: center;
        .btn {
            padding: 8px 30px;
            border-radius: 8px;
            color: #666;
            background-color: #ddd;
        }
    }
    .content {
        width: calc(90vw - 40px);
        height: calc(90vh - 95px);
        border-radius: 4px;
        margin-top: 20px;
        border: 1px solid #eee;
        background-color: #fff;
        padding: 15px;
    }
}
</style>
