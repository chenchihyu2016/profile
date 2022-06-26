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
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const loaderClasses: string[] = [
            'smooth_loader',
            'pulse_loader',
            'clock_loader',
            'glass_loader',
            'cross_loader'
        ];

        return { loaderClasses };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/loading';
</style>
