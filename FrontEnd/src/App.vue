<template>
    <div id="app">
        <v-3d-dots v-if="true"></v-3d-dots>
        <v-3d-ocean v-if="false"></v-3d-ocean>
        <v-menu></v-menu>
        <div v-if="true" class="app-box-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vDots from "@/components/V-3D/dots/v-3d-dots.vue";
import vOcean from "@/components/V-3D/ocean/v-3d-ocean.vue";
import vMenu from "@/layout/menu.vue";
export default {
    name: "App",
    data() {
        return {};
    },
    components: {
        "v-3d-dots": vDots,
        "v-3d-ocean": vOcean,
        "v-menu": vMenu,
    },
    methods: {},
};
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/main.css";
@import "./styles/iconfont.css";
@import "./styles/index.scss";
@import "./styles/animation.css";
#app {
    .app-box-content {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
