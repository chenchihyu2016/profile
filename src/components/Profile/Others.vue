<script lang="ts" setup>
    import { ref } from 'vue';
    import cards from '@/assets/json/cardInformation.json';
    import Hobby from '../Hobby.vue';
    import Reading from '../Reading.vue';
    import HorizontalParallax from '../HorizontalParallax.vue';

    const othersContainerRef = ref();
    const cardInfos = ref(cards);
    const cardInfoNames = ref(cards.map(({ name }) => name));
    const currentDescription = ref('TRAVEL_DESCRIPTION');
    const currentTab = ref('TRAVEL');
    const tabs = ref(['TRAVEL', 'HOBBY']);

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
</script>

<template>
    <section ref="othersContainerRef" class="others_container" id="others">
        <h2 class="header_title">
            {{ $t('OTHER_EXPERIENCE') }}
            <button
                :class="['button', currentTab === tab ? 'is_active' : '']"
                v-for="tab in tabs"
                @click="changTab(tab)"
                @touchstart="toggleHoverEffect"
                @touchend="toggleHoverEffect"
            >
                {{ $t(tab) }}
            </button>
        </h2>
        <transition name="fade" mode="out-in">
            <h3 class="others_description" :key="currentDescription" v-html="$t(currentDescription)"></h3>
        </transition>
        <transition name="fade" mode="out-in">
            <!-- <KeepAlive> -->
            <HorizontalParallax v-if="currentTab === 'TRAVEL'" :cards="cards"></HorizontalParallax>
            <Hobby v-else-if="currentTab === 'HOBBY'" />
            <Reading v-else />
            <!-- </KeepAlive> -->
        </transition>

        <!-- <Swiper :swiperElements="cardInfos" v-if="currentTab === 'TRAVEL'">
                    <template v-for="cardInfoName in cardInfoNames" v-slot:[cardInfoName]="{ swiperElement }">
                        <Card :cardInfo="swiperElement" />
                    </template>
                </Swiper> -->
    </section>
</template>

<style lang="scss" scoped>
    .others_container {
        width: 100%;
        height: 70vmin;
        margin-bottom: 20%;
        transform-style: preserve-3d;
        position: relative;
        scroll-margin-top: 3rem;

        @media (orientation: portrait) {
            height: 70vmin;
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
            line-height: 1.5rem;
            margin-bottom: 1rem;

            @media (orientation: portrait) {
                font-size: 0.8rem;
            }
        }
    }
</style>
