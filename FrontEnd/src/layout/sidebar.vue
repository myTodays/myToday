<template>
    <div class="sidebar-box">
        <div class="big iconfont icon-huitui">
            <div class="tips">返回上一页</div>
        </div>
        <div class="nav-box">
            <div class="nav-list iconfont icon-xiangmu4">
                <div class="tips">菜单</div>
            </div>
            <div class="nav-list iconfont icon-home">
                <div class="tips">主页</div>
            </div>
            <div class="nav-list iconfont icon-yonghudianji">
                <div class="tips">用户</div>
            </div>
            <div
                @click="handleFullScreen"
                class="nav-list iconfont"
                :class="fullscreen ? 'icon-tuichuquanping' : 'icon-quanping2 '"
            >
                <div class="tips">
                    {{ fullscreen ? "关闭全屏" : "开启全屏" }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullscreen: false,
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
    },
};
</script>

<style lang="scss" scoped>
.sidebar-box {
    position: fixed;
    left: 5%;
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .iconfont {
        font-size: 25px;
        color: #fff;
        cursor: pointer;
        width: 36px;
        height: 36px;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .tips {
            visibility: hidden;
            font-size: 14px;
            white-space: nowrap;
            margin-left: 10px;
        }
        &:hover {
            transition: 0.3s all ease;
            color: #2165f8;
            .tips {
                visibility: visible;
            }
        }
        &.big {
            font-size: 36px;
            padding-bottom: 10px;
        }
    }
    .nav-box {
        padding-left: 10px;
        .nav-list {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 20px;
        }
    }
}
</style>
