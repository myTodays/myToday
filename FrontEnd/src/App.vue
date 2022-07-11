<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { useStore } from "vuex";
export default {
    name: "App",
    setup() {
        const store = useStore();
        return { store };
    }
};
</script>

<style lang="scss">
@import "./common/styles/reset.css";
@import "./common/styles/main.css";
@import "./common/styles/iconfont.css";
@import "./common/styles/index.scss";
@import "./common/styles/animation.css";
</style>
