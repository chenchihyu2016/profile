<template>
    <section class="loading_container">
        <h2 class="animation_header">Loaders</h2>
        <div class="animation_items">
            <div
                class="animation_item"
                v-for="(loaderClass, index) in loaderClasses"
                :key="index"
            >
                <div :class="loaderClass" />
            </div>
        </div>
        <div class="container">
            <div
                v-for="num in 3"
                :key="num"
                class="ball"
                :style="{ transform: styleFunc(num) }"
            ></div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const loaderClasses: string[] = [
            'smooth_loader',
            'pulse_loader',
            'clock_loader',
            'glass_loader',
            'cross_loader'
        ];

        function styleFunc(num: Number) {
            return `translateX(30px) translateY(-50%)`;
        }

        return { loaderClasses, styleFunc };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/loading';

.container {
    position: relative;
    width: 200px;
    aspect-ratio: 16/9;
    border: 1px solid $color-white;
    left: 50%;
    overflow: hidden;

    .ball {
        position: absolute;
        background: $color-white;
        border-radius: 50%;
        width: 20px;
        aspect-ratio: 1/1;
        top: 50%;
        transform: translateY(-50%);
        animation: moving 5000ms infinite;
    }
}
</style>
