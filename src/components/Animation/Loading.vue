<template>
    <div class="loading_container">
        <div class="animation_header">Loaders</div>
        <div class="animation_items">
            <div
                class="animation_item"
                v-for="(loaderClass, index) in loaderClasses"
                :key="index"
            >
                <div :class="loaderClass" />
            </div>
        </div>
    </div>
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
