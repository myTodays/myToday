<template>
    <x-home></x-home>
</template>

<script>
import xHome from "./layout/home.vue";

export default {
    name: "App",
    components: {
        "x-home": xHome,
    },
};
</script>

<style lang='scss'>
@import "./styles/main.css"; 
</style>
