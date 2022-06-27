<template>
    <figure
        class="card_container"
        @touchstart.passive="enterHandle"
        @mouseenter="enterHandle"
        @mousemove.passive="moveHandle"
        @touchmove.passive="moveHandle"
        @mouseleave="leaveHandle"
        @touchend="leaveHandle"
        :style="{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
        }"
    >
        <img
            class="image"
            :src="useGetImageUrl(cardInfo.image)"
            :alt="$t(cardInfo.titleLocaleKey.toUpperCase())"
        />
        <figcaption class="text">
            <p class="title">
                {{ $t(cardInfo.titleLocaleKey.toUpperCase()) }}
            </p>
            <p class="description">
                {{ $t(cardInfo.descriptionLocaleKey.toUpperCase()) }}
            </p>
        </figcaption>
    </figure>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, PropType } from 'vue';
import { useGetImageUrl } from '@/composables/image';
import { CardItem } from '@/models/CardItem';

export default defineComponent({
    props: {
        cardInfo: {
            type: Object as PropType<CardItem>,
            required: true
        }
    },
    setup(props) {
        const { cardInfo } = toRefs(props);
        const offset = reactive({ x: 0, y: 0 });
        const center = reactive({ x: 0, y: 0 });
        const rotateX = ref(0);
        const rotateY = ref(0);

        function moveHandle(event: MouseEvent | TouchEvent) {
            if (event instanceof MouseEvent) {
                const { offsetX, offsetY } = event;

                offset.x = offsetX >= 0 ? offsetX : 0;
                offset.y = offsetY >= 0 ? offsetY : 0;

                rotateY.value = ((offsetX - center.x) / center.x) * 10;
                rotateX.value = ((center.y - offsetY) / center.y) * 5;
            } else {
                const target = event.target as HTMLElement;
                const rect = target.getBoundingClientRect();
                const offsetX = event.targetTouches[0].pageX - rect.left;
                const offsetY = event.targetTouches[0].pageY - rect.top;

                rotateY.value = ((offsetX - center.x) / center.x) * 10;
                rotateX.value = ((center.y - offsetY) / center.y) * 5;
            }
        }

        function enterHandle(event: MouseEvent | TouchEvent) {
            const target = event.target as HTMLElement;
            const height = Number(
                getComputedStyle(target)
                    .getPropertyValue('height')
                    .replace('px', '')
            );
            const width = Number(
                getComputedStyle(target)
                    .getPropertyValue('width')
                    .replace('px', '')
            );

            center.x = width / 2;
            center.y = height / 2;
        }

        function leaveHandle() {
            rotateX.value = 0;
            rotateY.value = 0;
        }

        return {
            offset,
            center,
            rotateX,
            rotateY,
            cardInfo,
            useGetImageUrl,
            moveHandle,
            enterHandle,
            leaveHandle
        };
    }
});
</script>

<style scoped lang="scss">
.card_container {
    @include flex(center, center);
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid $color-primary;
    }

    .image {
        object-fit: contain;
        opacity: 0.8;
        pointer-events: none;
        max-width: 100%;
        max-height: 100%;
    }

    .text {
        position: absolute;
        bottom: 10px;
        left: 0;
        padding: 0 10px;
        text-align: justify;
        pointer-events: none;

        .title {
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 10px;
            color: $color-primary;
            text-align: left;

            @media (orientation: portrait) {
                font-size: 1.5rem;
            }
        }

        .description {
            background: rgba($color-gray, 0.2);
            color: $color-white;
            padding: 0 0.25rem;

            @media (orientation: portrait) {
                font-size: 0.8rem;
            }
        }
    }
}
</style>
