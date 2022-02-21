<template>
    <div class="v-input">
        <input type="text" />
    </div>
</template>

<script>
export default {
    name:'v-input',
    data() {
        return {
            placeholder: "请输入...",
        };
    },
};
</script>

<style lang="scss" scoped>
.v-input {
    input {
        width: 100%;
        height: 30px;
        background: none;
        outline: none;
        border: none;
        &:focus {
            border: none;
        }
        &:active {
            border: none;
        }
    }
}
</style>
