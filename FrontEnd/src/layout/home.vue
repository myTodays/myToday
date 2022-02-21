<template>
    <div class="home-box">
        <v-bg v-if="store.state.bgType == 'none'"></v-bg>
        <v-3d-dots v-if="store.state.bgType == 'spirit'"></v-3d-dots>
        <v-3d-ocean v-if="store.state.bgType == 'lucky'"></v-3d-ocean>
        <v-sidebar></v-sidebar>
        <div class="home-box-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import vDots from "@/components/v-3D/dots/v-3d-dots.vue";
import vOcean from "@/components/v-3D/ocean/v-3d-ocean.vue";
import vBg from "@/components/plugins/v-bg.vue";
import vSidebar from "@/layout/sidebar.vue";
import { useStore } from "vuex";
export default {
    components: {
        "v-bg": vBg,
        "v-3d-dots": vDots,
        "v-3d-ocean": vOcean,
        "v-sidebar": vSidebar,
    },
    setup() {
        const store = useStore();
        return { store };
    },
};
</script>
<style lang="scss" scoped>
// .home-box {}
</style>
