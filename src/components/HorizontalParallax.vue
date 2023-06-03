<script lang="ts" setup>
    import { ref } from 'vue';
    import { useEventListener } from '@vueuse/core';
    import { useGetImageUrl } from '@/composables/image';

    interface HorizontalParallax {
        cards: Array<{
            id: number;
            name: string;
            titleLocaleKey: string;
            descriptionLocaleKey: string;
            image: string;
        }>;
    }

    const props = defineProps<HorizontalParallax>();
    const mouseDownAt = ref(0);
    const prevPercentage = ref(0);
    const percentage = ref(0);
    const nextPercentage = ref(0);
    const track = ref<HTMLDivElement>();
    const images = ref<Array<string>>([
        '1524781289445-ddf8f5695861',
        '1610194352361-4c81a6a8967e',
        '1618202133208-2907bebba9e1',
        '1495805442109-bf1cf975750b',
        '1548021682-1720ed403a5b',
        '1496753480864-3e588e0269b3',
        '1613346945084-35cccc812dd5',
        '1516681100942-77d8e7f9dd97'
    ]);
    const imageRefs = ref<Array<HTMLImageElement>>([]);

    function handleOnDown(e: MouseEvent | Touch) {
        mouseDownAt.value = e.clientX;
    }

    function handleOnUp() {
        mouseDownAt.value = 0;
        prevPercentage.value = percentage.value;
    }

    function handleOnMove(e: MouseEvent | Touch) {
        if (mouseDownAt.value === 0) return;

        const mouseDelta = mouseDownAt.value - e.clientX;
        const maxDelta = (track.value?.clientWidth ?? 0) / 2;
        const p = (mouseDelta / maxDelta) * -100;

        nextPercentage.value = Math.max(Math.min(prevPercentage.value + p, 0), -100);

        percentage.value = nextPercentage.value;

        track.value?.animate(
            { transform: `translate(${nextPercentage.value}%, -50%)` },
            { duration: 1200, fill: 'forwards' }
        );
    }

    console.log(props.cards);

    useEventListener('mouseup', handleOnUp);
    useEventListener('mousedown', handleOnDown);
    useEventListener('mousemove', handleOnMove);
    useEventListener('touchend', () => handleOnUp());
    useEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
    useEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
</script>

<template>
    <div class="box-container">
        <div id="image-track" ref="track">
            <img
                v-for="card in cards"
                ref="imageRefs"
                draggable="false"
                :src="useGetImageUrl(card.image)"
                :style="{ objectPosition: `${100 + nextPercentage}% center` }"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .box-container {
        position: relative;
        width: 100%;
        height: 56vmin;
        border-radius: 1rem;
        overflow: hidden;
    }

    #image-track {
        display: flex;
        position: absolute;
        gap: 4vmin;
        left: 50%;
        top: 50%;
        user-select: none; /* -- Prevent image highlighting -- */
        height: 100%;
        animation-duration: 1200ms;
        animation-fill-mode: forwards;

        img {
            width: 40vmin;
            height: 56vmin;
            object-fit: cover;
            border-radius: 1rem;
            animation-duration: 1200ms;
            animation-fill-mode: forwards;
        }
    }
</style>
