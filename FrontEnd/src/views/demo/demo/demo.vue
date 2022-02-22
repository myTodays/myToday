<template>
    <div class="demo"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {}
});
</script>

<style lang="scss">
.demo {
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
