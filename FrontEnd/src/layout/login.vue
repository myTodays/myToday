<template>
    <div v-if="false" class="login-box">
        <div class="login-tips-box">
            <v-logo fontSize="60px"></v-logo>
            <div class="loading">
                <v-loading></v-loading>
            </div>
        </div>
        <div class="login-content">
            <div class="login-title">
                <v-logo
                    :logoText="username || 'myToday'"
                    fontSize="60px"
                ></v-logo>
            </div>
            <div class="login-input" :class="{ active: index == 1 }">
                <div class="left">
                    <span class="iconfont icon-zhanghao"></span>
                    <input
                        type="text"
                        placeholder="请输入账号（6-20个字符）"
                        v-model="username"
                        @focus="focusClick(1)"
                        @blur="blueClick"
                    />
                </div>
                <!-- <span class="right iconfont">图</span> -->
            </div>
            <div class="login-input" :class="{ active: index == 2 }">
                <div class="left">
                    <span class="iconfont icon-mima3"></span>
                    <input
                        :type="showPwd ? 'text' : 'password'"
                        placeholder="请输入密码（6-20个字符）"
                        v-model="password"
                        @focus="focusClick(2)"
                        @blur="blueClick"
                    />
                </div>
                <span
                    class="right iconfont icon-eye2"
                    :class="{ active: showPwd }"
                    @click="showPwd = !showPwd"
                ></span>
            </div>
            <div class="find-pwd"><span>忘记密码?</span></div>
            <div class="login-btn">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            index: 0,
            showPwd: false,
            username: "",
            password: "",
        };
    },
    methods: {
        focusClick(item) {
            this.index = item;
        },
        blueClick() {
            this.index = 0;
        },
    },
};
</script>
<style lang="scss" scoped>
.login-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 360px;
    height: 320px;
    background-color: rgba($color: #ffffff, $alpha: 0.3);
    &:hover {
        transition: 0.3s all;
        background-color: rgba($color: #ffffff, $alpha: 0.8);
        border: 1px solid #fff;
        .login-content {
            transition: 0.3s all;
            display: block !important;
        }
        .login-tips-box {
            transition: 0.3s all;
            display: none !important;
        }
    }
    padding: 60px 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-tips-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0 60px;
        .loading {
            position: relative;
        }
    }
    .login-content {
        display: none;
        width: 360px;
        padding-bottom: 20px;
        .login-title {
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            color: #2165f8;
            padding-bottom: 20px;
        }
        .login-input {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid #fff;
            padding: 5px 15px;
            margin-top: 20px;
            border-radius: 6px;
            background-color: rgba($color: #fff, $alpha: 0.5);
            &.active {
                transition: 0.3s all ease;
                border: 2px solid #2165f8;
                background-color: rgba($color: #fff, $alpha: 0.8);
            }
            .left {
                display: flex;
                align-items: center;
                width: 90%;
                .iconfont {
                    margin-right: 10px;
                    font-size: 20px;
                    color: #666;
                }
                input {
                    width: 100%;
                    height: 30px;
                    background: none;
                    outline: none;
                    border: none;
                    font-size: 18px;
                    padding-top: 1px;
                    &:focus {
                        border: none;
                    }
                    &:active {
                        border: none;
                    }
                }
            }
            .right {
                color: #666;
                font-size: 20px;
                cursor: pointer;
                &.active {
                    color: #2165f8;
                }
            }
        }
        .find-pwd {
            display: flex;
            justify-content: flex-end;
            padding: 15px 0 25px 0;
            span {
                cursor: pointer;
                color: #555;
                &:hover {
                    color: #2165f8;
                }
            }
        }
        .login-btn {
            height: 50px;
            background-color: #3c76f1;
            border-radius: 8px;
            font-size: 20px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            &:hover {
                transition: 0.3s all ease;
                background-color: #2165f8;
                box-shadow: 0 3px 20px 3px rgba(0, 0, 0, 0.3);
            }
        }
    }
}
</style>
