<template>
    <div class="home-box">
        <!-- <x-3d-dots></x-3d-dots> -->
        <x-3d-ocean></x-3d-ocean>
        <div class="home-box-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import xDots from "@/components/Three/x-3d-dots.vue";
import xOcean from "@/components/Three/x-3d-ocean.vue";
export default {
    data() {
        return {};
    },
    components: {
        "x-3d-dots": xDots,
        "x-3d-ocean": xOcean,
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.home-box-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
    // background-color: #bfa;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
