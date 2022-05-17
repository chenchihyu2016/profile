<template>
    <div class="image_container">
        <img class="image background" :src="useGetImageUrl('mountain')" />
        <img class="image foreground" :src="useGetImageUrl('trees')" />
        <span class="description">TEXT</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGetImageUrl } from '@/composables/image';

export default defineComponent({
    setup() {
        return { useGetImageUrl };
    }
});
</script>

<style lang="scss" scoped>
.image_container {
    @include flex(center, center);
    @include border_radius();
    width: 100%;
    height: 80%;
    transform-style: preserve-3d;
    position: relative;
    z-index: -1;

    @media (orientation: portrait) {
        height: 40%;
    }

    .image {
        @include border_radius();
        object-fit: cover;
        position: absolute;
        width: 99%;
        height: 100%;
    }

    .background {
        transform: translateZ(-5px) scale(1.5);
        opacity: 0.9;
    }

    .foreground {
        transform: translateZ(-2.5px) scale(1.25);
        opacity: 0.9;
    }

    .description {
        font-size: 2rem;
        color: $color-white;
    }
}
</style>
