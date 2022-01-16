<template>
    <!-- 小魔方部分 -->
    <view id="mofang" class="xbox">
        <view
            :class="[`box${index + 1}`]"
            v-for="(item, index) in 6"
            :key="index"
        >
            <view class="minbox" v-for="(item, index) in 9" :key="index"></view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            box: 10,
        };
    },
};
</script>

<style lang="scss" scoped>
@keyframes round {
    0% {
        transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotateX(360deg) rotateY(360deg);
    }
}
#mofang {
    width: 240px;
    height: 240px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    transform-origin: center center;
    animation: round 10s linear infinite;
    .box1,
    .box2,
    .box3,
    .box4,
    .box5,
    .box6 {
        width: 210px;
        height: 210px;
        opacity: 0.8;
        position: absolute;
        transform-origin: center center;
        display: flex;
        flex-direction: nowrap;
        align-items: center;
        flex-wrap: wrap;
        .minbox {
            width: 70px;
            height: 70px;
            border: 1px solid white;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .box1 {
        transform: rotateY(90deg) translateZ(105px);
        background-color: blue;
    }

    .box2 {
        transform: rotateY(180deg) translateZ(105px);
        background-color: green;
    }

    .box3 {
        transform: rotateY(270deg) translateZ(105px);
        background-color: cyan;
    }

    .box4 {
        transform: rotateY(360deg) translateZ(105px);
        background-color: yellow;
    }

    .box5 {
        transform: rotateX(90deg) translateZ(105px);
        background-color: rebeccapurple;
    }

    .box6 {
        transform: rotateX(90deg) translateZ(-105px);
        background-color: red;
    }
}
</style>
