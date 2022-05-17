<template>
    <Swiper
        :slides-per-view="1"
        :space-between="2"
        class="swiper_container"
        :pagination="{ clickable: true }"
    >
        <SwiperSlide
            v-for="swiperElement in swiperElements"
            :key="swiperElement.id"
            class="swiper_slide"
        >
            <!-- Developers can customize the content by writing code in this way. -->
            <slot :name="swiperElement.name" :swiperElement="swiperElement" />
        </SwiperSlide>
    </Swiper>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

export default defineComponent({
    components: { Swiper, SwiperSlide },
    props: {
        swiperElements: {
            type: Object
        }
    },
    setup(props) {
        const { swiperElements } = toRefs(props);

        return {
            modules: [Pagination],
            swiperElements
        };
    }
});
</script>

<style scoped lang="scss">
.swiper_container {
    width: 100%;
    height: 100%;
    .swiper_slide {
        @include flex(center, center);
        width: 100% !important;
        height: 100%;
    }

    :deep .swiper-button-next,
    :deep .swiper-button-prev {
        color: $color-primary;

        @media (orientation: portrait) {
            display: none;
        }
    }

    :deep .swiper-button-disabled {
        opacity: 0;
    }

    :deep .swiper-pagination-bullets {
        top: 10px;
        bottom: unset;
        width: unset;
        left: 50%;
        transform: translateX(-50%);

        & > .swiper-pagination-bullet {
            transition: 300ms ease all;
            background: $color-black;
            border-radius: 50%;
            width: 20px;
            height: 20px;

            @media (hover: hover) {
                &:hover {
                    background: $color-white;
                }
            }
        }

        & > .swiper-pagination-bullet-active {
            background: $color-primary;
        }
    }
}
</style>
