<template>
    <div class="v-logo" :style="`font-size:${fontSize}`" ref="logo">
        {{ logoText }}
    </div>
</template>

<script>
export default {
    name: "v-logo",
    props: {
        logoText: {
            type: String,
            default: "myToday",
        },
        fontSize: {
            type: String,
            default: "60px",
        },
    },
};
</script>

<style lang="scss" scoped>
.v-logo {
    font-weight: bold;
    background-image: -webkit-linear-gradient(
        left,
        rgb(5, 105, 255),
        #f76b08 10%,
        rgb(252, 23, 23) 20%,
        rgb(255, 5, 201) 30%,
        rgb(13, 230, 78) 40%,
        rgb(5, 105, 255) 50%,
        #f76b08 60%,
        rgb(252, 23, 23) 70%,
        rgb(255, 5, 201) 80%,
        rgb(13, 230, 78) 90%,
        rgb(5, 105, 255)
    );
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    -webkit-animation: slide 2s infinite linear;
    animation: slide 5s infinite linear;
    color: transparent;
}
</style>
