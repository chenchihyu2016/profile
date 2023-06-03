<template>
    <div class="image_container" ref="imageContainer">
        <div
            class="transparent_layer"
            ref="transparentRef"
            @mousemove.passive="moveHandle"
            @touchmove.passive="moveHandle"
        ></div>
        <img
            :src="useGetImageUrl('fitnessBefore')"
            alt="before"
            class="image"
            @load.stop="assignTransparentLayerWidth"
        />
        <img
            :src="useGetImageUrl('fitnessAfter')"
            alt="after"
            class="image"
            :style="{
                'clip-path': `polygon(${upperImagePercentage}% 0%, 100% 0%, 100% 100%, ${upperImagePercentage}% 100%)`
            }"
        />
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, Ref, ref, watch } from 'vue';
    import { useStore } from '../store';
    import { useGetImageUrl } from '@/composables/image';

    export default defineComponent({
        setup() {
            const imageContainer = ref();
            const { state } = useStore();
            const isMobile = computed(() => state.isMobile);
            const upperImagePercentage = ref(20);
            const transparentRef = ref<HTMLImageElement>() as Ref<HTMLImageElement>;
            let transparentLayerRefWidth = 0;

            function moveHandle(event: MouseEvent | TouchEvent) {
                let percentage = 0;

                if (event instanceof MouseEvent) {
                    percentage = (event.offsetX / transparentLayerRefWidth) * 100;
                } else {
                    const target = event.target as HTMLElement;
                    const rect = target.getBoundingClientRect();
                    const x = event.targetTouches[0].pageX - rect.left;

                    percentage = (x / transparentLayerRefWidth) * 100;
                }

                upperImagePercentage.value = percentage;
            }

            function assignTransparentLayerWidth() {
                const target = event?.target as HTMLImageElement;

                if (target?.tagName === 'IMG') {
                    const imageWidthInPx = getComputedStyle(target)['width'];
                    const imageWidth = Number(imageWidthInPx.replace('px', ''));

                    transparentLayerRefWidth = imageWidth;
                    transparentRef.value.style.width = imageWidthInPx;
                }
            }

            onMounted(() => {
                assignTransparentLayerWidth();
            });

            watch(isMobile, () => {
                assignTransparentLayerWidth();
            });

            return {
                imageContainer,
                upperImagePercentage,
                transparentRef,
                moveHandle,
                useGetImageUrl,
                assignTransparentLayerWidth
            };
        }
    });
</script>

<style scoped lang="scss">
    .image_container {
        @include inline-flex(center, center);
        width: 100%;
        height: 100%;
        position: relative;

        .transparent_layer {
            position: relative;
            height: 100%;
            z-index: 1;

            &::before {
                content: 'Before(2018)';
                color: $color-primary;
                position: absolute;
                left: -110%;
                top: 50%;
                transform: translateY(-50%);
                z-index: -1;
            }

            &::after {
                content: 'After(2021)';
                color: $color-primary;
                position: absolute;
                right: -100%;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .image {
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: contain;

            &:nth-child(2) {
                border-radius: 0 5px 5px 0;
            }
        }
    }
</style>
