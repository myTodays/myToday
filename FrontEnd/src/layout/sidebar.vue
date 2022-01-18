<template>
    <div class="sidebar-box">
        <div class="nav-box">
            <div class="nav-list big">
                <div class="tips">返回上一页</div>
                <div class="iconfont icon-huitui"></div>
            </div>
            <div class="nav-list">
                <div class="tips">主页</div>
                <div class="iconfont icon-home"></div>
            </div>
            <div @click="handleFullScreen" class="nav-list">
                <div class="tips">
                    {{ fullscreen ? "关闭全屏" : "开启全屏" }}
                </div>
                <div
                    class="iconfont"
                    :class="
                        fullscreen ? 'icon-tuichuquanping' : 'icon-quanping2 '
                    "
                ></div>
            </div>
            <div class="nav-list">
                <div v-if="!bgFlag" class="tips">切换背景</div>
                <div
                    class="iconfont icon-pipei1"
                    @click="bgFlag = !bgFlag"
                    :class="{ active: bgFlag }"
                ></div>
                <div v-if="bgFlag" class="bg-list">
                    <div
                        class="list"
                        v-for="(bg, index) in bgArr"
                        :key="index"
                        @click="toggleBg(bg)"
                        :class="{ active: store.state.bgType == bg.type }"
                    >
                        {{ bg.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
export default {
    data() {
        return {
            fullscreen: false,
            bgFlag: false,
            bgArr: [
                { type: "none", name: "关闭背景" },
                { type: "lucky", name: "自由女神" },
                { type: "spirit", name: "精灵粒子" },
            ],
        };
    },
    mounted() {},
    methods: {
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen(); // IE11
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        toggleBg(bg) {
            this.bgFlag = false;
            this.$store.commit("toggleBgType", bg.type);
        },
    },
    setup() {
        const store = useStore();
        return { store };
    },
};
</script>

<style lang="scss" scoped>
.sidebar-box {
    position: fixed;
    left: 5%;
    top: 5%;
    .nav-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        padding: 20px 10px;
        border-radius: 10px;
        &:hover {
            transition: 0.3s all ease;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
        }
        .nav-list {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 20px;
            position: relative;

            &.big {
                margin-top: 0;
                .iconfont {
                    font-size: 32px;
                }
            }
            &:hover {
                transition: 0.3s all ease;
                color: #2165f8;
                .tips {
                    visibility: visible;
                }
            }
            .iconfont {
                font-size: 24px;
                color: #fff;
                cursor: pointer;
                &.active {
                    color: #2165f8;
                }
                &:hover {
                    color: #2165f8;
                }
            }
            .tips {
                width: 100px;
                position: absolute;
                visibility: hidden;
                font-size: 14px;
                white-space: nowrap;
                right: -120px;
                top: 50%;
                transform: translateY(-50%);
                text-align: left;
            }
            .bg-list {
                width: 100px;
                position: absolute;
                white-space: nowrap;
                right: -120px;
                font-size: 14px;
                .list {
                    color: #fff;
                    margin-bottom: 6px;
                    cursor: pointer;
                    &:hover {
                        color: #2165f8;
                    }
                    &.active {
                        color: #2165f8;
                    }
                }
            }
        }
    }
}
</style>
