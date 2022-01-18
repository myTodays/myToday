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
    },
    // mounted(){
    //      this.$router.push("/home");
    // }
};
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/main.css";
@import "./styles/iconfont.css";
@import "./styles/index.scss";
@import "./styles/animation.css";
// #app {}
</style>
