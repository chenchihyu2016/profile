<template>
    <div ref="othersContainerRef" class="others_container">
        <h2 class="header_title">
            {{ $t('OTHER_EXPERIENCE') }}
            <span
                :class="['button', currentTab === tab ? 'is_active' : '']"
                v-for="tab in tabs"
                @click="changTab(tab)"
                @touchstart="toggleHoverEffect"
                @touchend="toggleHoverEffect"
                >{{ $t(tab) }}</span
            >
        </h2>
        <transition name="fade" mode="out-in">
            <h4
                class="others_description"
                :key="currentDescription"
                v-html="$t(currentDescription)"
            ></h4>
        </transition>
        <transition name="fade" mode="out-in">
            <KeepAlive
                ><Swiper
                    :swiperElements="cardInfos"
                    v-if="currentTab === 'TRAVEL'"
                >
                    <template
                        v-for="cardInfoName in cardInfoNames"
                        v-slot:[cardInfoName]="{ swiperElement }"
                    >
                        <Card :cardInfo="swiperElement" />
                    </template>
                </Swiper>
                <Hobby v-else-if="currentTab === 'HOBBY'" />
                <Reading v-else
            /></KeepAlive>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';
import { useStore } from '@/store';
import { useGetIndividualScrollTop } from '@/composables/scroll';
import cardInformation from '@/assets/json/cardInformation.json';
import Swiper from '@/components/common/Swiper.vue';
import Card from '@/components/common/Card.vue';

export default defineComponent({
    components: {
        Swiper,
        Card,
        Hobby: defineAsyncComponent(() => import('@/components/Hobby.vue')),
        Reading: defineAsyncComponent(() => import('@/components/Reading.vue'))
    },
    setup() {
        const othersContainerRef = ref();
        const cardInfos = ref(cardInformation);
        const cardInfoNames = ref(cardInformation.map(({ name }) => name));
        const currentDescription = ref('TRAVEL_DESCRIPTION');
        const { dispatch } = useStore();
        const currentTab = ref('TRAVEL');
        const tabs = ref(['TRAVEL', 'HOBBY']);

        onMounted(() => {
            const scrollTop = useGetIndividualScrollTop(
                othersContainerRef.value
            );

            dispatch('setScrollTopList', { key: 'others', value: scrollTop });
        });

        function changTab(tab: string) {
            if (currentTab.value !== tab) {
                currentTab.value = tab;
                currentDescription.value = `${tab}_DESCRIPTION`;
            }
        }

        function toggleHoverEffect() {
            const target = event?.target as HTMLSpanElement;

            target.classList.toggle('is_pressed');
        }

        return {
            othersContainerRef,
            cardInfos,
            cardInfoNames,
            currentTab,
            currentDescription,
            tabs,
            changTab,
            toggleHoverEffect
        };
    }
});
</script>

<style lang="scss" scoped>
.others_container {
    width: 100%;
    height: 400px;
    margin-bottom: 20%;
    transform-style: preserve-3d;
    position: relative;

    @media (orientation: portrait) {
        height: 400px;
        margin-bottom: 60%;
    }

    .header_title {
        .button {
            color: $color-primary;
            border: 1px solid $color-primary;
            font-size: 1rem;
            margin: 0 0.25rem 0 0.5rem;
            padding: 0.25rem 2rem;
            cursor: pointer;
            transition: 300ms all ease;
            box-sizing: border-box;
            display: inline-block;

            @media (orientation: portrait) {
                font-size: 0.6rem;
                padding: 0.25rem 0.5rem;
            }

            @media (hover: hover) {
                &:hover {
                    transform: translateX(2px) translateY(2px);
                }
            }
        }

        .is_active {
            background: $color-primary;
            color: $color-background;
        }

        .is_pressed {
            transform: translateX(2px) translateY(2px);
        }
    }

    .others_description {
        text-align: justify;

        @media (orientation: portrait) {
            font-size: 0.8rem;
        }
    }
}
</style>
