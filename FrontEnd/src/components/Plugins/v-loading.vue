<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    z-index: 100;
    height: 30px;
    width: 300px;
    display: flex;
    justify-content: center;
    span {
        width: 8px;
        border-radius: 6px;
        background-color: rgb(11, 85, 245);
        animation: load 0.6s ease infinite;
        margin: 0 6px;
        &:nth-child(2) {
            animation-delay: 0.1s;
        }
        &:nth-child(3) {
            animation-delay: 0.2s;
        }
        &:nth-child(4) {
            animation-delay: 0.3s;
        }
        &:nth-child(5) {
            animation-delay: 0.4s;
        }
        &:nth-child(6) {
            animation-delay: 0.5s;
        }
        &:nth-child(7) {
            animation-delay: 0.6s;
        }
        &:nth-child(8) {
            animation-delay: 0.7s;
        }
        &:nth-child(9) {
            animation-delay: 0.8s;
        }
        &:nth-child(10) {
            animation-delay: 0.9s;
        }
    }
    @keyframes load {
        10% {
            transform: scaleY(1.2);
            background-color: rgb(11, 85, 245);
        }
        20% {
            transform: scaleY(1.4);
            background-color: rgb(252, 7, 7);
        }
        30% {
            transform: scaleY(1.6);
            background-color: rgb(252, 7, 211);
        }
        40% {
            transform: scaleY(1.8);
            background-color: rgb(245, 116, 11);
        }
        50% {
            transform: scaleY(2);
            background-color: rgb(11, 85, 245);
        }
        60% {
            transform: scaleY(2);
            background-color: rgb(11, 85, 245);
        }
        70% {
            transform: scaleY(1.8);
            background-color: rgb(245, 116, 11);
        }
        80% {
            transform: scaleY(1.6);
            background-color: rgb(252, 7, 211);
        }
        90% {
            transform: scaleY(1.4);
            background-color: rgb(252, 7, 7);
        }
        100% {
            transform: scaleY(1.2);
            background-color: rgb(7, 252, 7);
        }
    }
}
</style>