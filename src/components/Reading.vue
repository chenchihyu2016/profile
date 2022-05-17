<template>
    <img class="image_perspective" :src="useGetImageUrl('AtomicHabits')" />
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
.image_perspective {
    @include border_radius();
    position: absolute;
    transform: translateZ(-5px) scale(1.5);
    height: 200px;
    right: -16.5%;
    bottom: -40%;
    opacity: 0.8;

    @media (orientation: portrait) {
        height: 150px;
        right: -10%;
    }
}
</style>
