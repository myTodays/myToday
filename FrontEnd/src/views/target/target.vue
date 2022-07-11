<template>
    <div class="target">
        <div class="target-title">
            <v-logo :logoText="state.targetTitle" fontSize="36px"></v-logo>
        </div>
        <div class="time-box">
            <div
                v-for="(item, index) in state.target"
                :key="index"
                class="time-content"
            >
                <div class="time-title">{{ item.title }}</div>
                <div
                    v-for="(titem, tindex) in item.plan"
                    :key="tindex"
                    class="time-list"
                >
                    <v-logo :logoText="'·'" fontSize="20px"></v-logo>&nbsp;{{ titem }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
    setup() {
        const state = reactive({
            targetTitle: "·我的2022·自律计划·",
            target: [
                {
                    title: "每天",
                    plan: [
                        "一小时锻炼身体",
                        "一小时阅读学习",
                        "乐观自信保持精力充沛",
                        "一天睡觉时间维持8小时",
                    ],
                },
                {
                    title: "每周",
                    plan: [
                        "10-15小时学习专业技能",
                        "3-5小时学习英语",
                        "2-3小时跟家人朋友通话",
                        "打扫一次家务和学做两个菜",
                    ],
                },
                {
                    title: "每月",
                    plan: [
                        "看一部有意义的电影",
                        "认真读完两本书并做笔记",
                        "参加一次有意义的活动",
                        "记录生活感悟并做月末总结",
                    ],
                },
                {
                    title: "每年",
                    plan: [
                        "做一次年度总结和规划",
                        "用喜欢的方式犒赏自己",
                        "去1-2个陌生的地方旅游",
                        "做一次全身全面体检",
                    ],
                },
            ],
        });
        return {
            state,
        };
    },
    mounted() {},
});
</script>

<style lang="scss" scoped>
.target {
    width: 50vw;
    // height: 80vh;
    position: fixed;
    left: 50%;
    top: 45%;
    z-index: 10000;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // border: 1px solid red;
    .target-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
    }
    .time-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .time-content {
            width: 45%;
            color: #000;
            background-color: rgba($color: #000, $alpha: 0.3);
            padding: 20px 4px;
            margin: 10px 5px;
            border-radius: 10px;
            box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.5);
            .time-title {
                color: #fff;
                text-align: center;
                font-size: 18px;
                padding-bottom: 8px;
            }
            .time-list {
                color: #fff;
                font-size: 14px;
                padding: 4px 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }
    }
}
</style>
