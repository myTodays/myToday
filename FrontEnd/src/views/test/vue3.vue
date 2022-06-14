<template>
    <div class="vue-test">6666</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
    setup() {
        const state = reactive({
            username: "likui",
            password:'123456'
        });
        const login = () => {
        };
        return {
            state,
            login,
        };
    },
    mounted() {
        this.login();
    },
});
</script>

<style lang="scss" scoped>
.vue-test {
    width: 90vw;
    height: 90vh;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 10000;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #fff, $alpha: 1);
    padding: 20px;
}
</style>
