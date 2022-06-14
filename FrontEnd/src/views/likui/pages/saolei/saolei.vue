<template>
    <div class="saolei-box">
        <div class="saolei-content">
            <!-- 按钮 -->
            <div class="level">
                <button class="active">初级</button>
                <button>中级</button>
                <button>高级</button>
                <button>重新开始</button>
                |&nbsp;<span class="customize">自定义</span>
            </div>
            <!-- 游戏区域 -->
            <div class="gameBox"></div>
            <!-- 底部的文字,剩余雷数 -->
            <div class="info">剩余雷数：<span class="mineNum"></span></div>
        </div>
    </div>
</template>

<script lang="ts">
import Mine from "../../common/ts/Game";
import { defineComponent } from "vue";

export default defineComponent({
    setup() {},
    mounted() {
        // 上边button的功能
        let btns: any = document.querySelectorAll(".level button");
        let mine: any = null; //用来存储生成的实例
        let ln = 0;
        let arr = [
            [9, 9, 10],
            [16, 16, 40],
            [28, 28, 99],
        ]; //不同级别的行数列数雷数
        for (let i = 0; i < btns.length - 1; i++) {
            btns[i].onclick = function () {
                btns[ln].className = "";
                this.className = "active";
                mine = new Mine(arr[i][0], arr[i][1], arr[i][2]);
                mine.init();
                ln = i;
            };
        }
        btns[0].onclick(); //初始化一下
        btns[3].onclick = function () {
            mine.init();
        };
        // 自定义按钮
        let customize: any = document.getElementsByClassName("customize")[0];
        customize.onclick = function () {
            customize.style.backgroundColor = "rgb(235, 62, 62)";
            const mine = new Mine(
                parseInt(<any>window.prompt(<any>"请输入行数: ")),
                parseInt(<any>window.prompt(<any>"请输入列数: ")),
                parseInt(<any>window.prompt(<any>"请输入雷数: "))
            );
            mine.init();
        };
    },
});
</script>

<style lang="scss">
.saolei-box {
    // box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-image: url(../../common/images/bg.png);
    background-size: 100% 100%;
    background-repeat: repeat-y;
    overflow: auto;
    z-index: 100;
    .saolei-content {
        padding: 50px 30px;
        overflow: auto;
        .level {
            text-align: center;
            margin-bottom: 10px;
            button {
                padding: 6px 15px;
                margin: 0 4px;
                background-color: rgb(19, 90, 243);
                color: white;
                border: none;
                border-radius: 3px;
                outline: none;
                cursor: pointer;
                &.active {
                    background: rgb(180, 7, 233);
                }
            }
            /* 自定义按钮 */
            .customize {
                padding: 5px 10px;
                margin-left: 4px;
                background-color: rgb(27, 65, 233);
                color: white;
                border-radius: 3px;
                cursor: pointer;
                font-size: 14px;
                &:hover {
                    background-color: rgb(235, 62, 62);
                }
            }
        }
        .gameBox {
            /* 雷 */
            .mine {
                background: #d9d9d9 url(../../common/images/panda.png) no-repeat
                    center;
                background-size: cover;
            }
            .flag {
                background: #ccc url(../../common/images/smiley.gif) no-repeat
                    center;
                background-size: cover;
            }
            /* 中间表格 */
            table {
                border-spacing: 1px;
                background-color: gray;
                margin: 0 auto;
            }
            td {
                padding: 0;
                width: 36px;
                height: 36px;
                background-color: #ccc;
                border: 3px solid;
                border-color: #fff #a1a1a1 #a1a1a1 #fff;
                text-align: center;
                line-height: 30px;
                font-weight: bold;
                &.zero {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                }
                &.one {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #0332fe;
                }
                &.two {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #019f02;
                }
                &.three {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #ff2600;
                }
                &.four {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #93208f;
                }
                &.five {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #ff7f29;
                }
                &.six {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #ff3fff;
                }
                &.seven {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #3fffbf;
                }
                &.eight {
                    border-color: #d9d9d9;
                    background-color: #d9d9d9;
                    color: #22ee0f;
                }
            }
        }
        /* 底部文字 */
        .info {
            margin-top: 10px;
            text-align: center;
            font-size: 15px;
            span {
                font-weight: bold;
                color: red;
            }
        }
    }
}
</style>
