<template>
    <main
        class="portfolio_container"
        ref="portfolioContainerRef"
        @touchstart.passive="touchstartHandle"
        @touchEnd="touchendHandle"
    >
        <LandingPage />
        <Intro />
        <Experience />
        <ExternalLink />
        <Contact />
        <Others />
        <Footer />
        <!-- <ParallaxImage /> -->
    </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import Footer from '@/components/Footer.vue';
import Intro from '@/components/Profile/Intro.vue';
import Contact from '@/components/Profile/Contact.vue';
import ParallaxImage from '@/components/Profile/ParallaxImage.vue';
import Experience from '@/components/Profile/Experience.vue';
import LandingPage from '@/components/Profile/LandingPage.vue';
import ExternalLink from '@/components/Profile/ExternalLink.vue';
import Others from '@/components/Profile/Others.vue';
import { useTouch } from '@/composables/touch';
import { useScroll } from '@/composables/scroll';
import { useStore } from '@/store';

export default defineComponent({
    components: {
        Intro,
        Footer,
        Contact,
        ParallaxImage,
        Experience,
        LandingPage,
        ExternalLink,
        Others
    },
    setup() {
        const { dispatch } = useStore();
        const portfolioContainerRef = ref();
        const { isSwipeDown, isSwipeUp, setTouchstartEvent, setTouchendEvent } =
            useTouch();
        const { scrollTopValue, setScrollTarget } = useScroll();

        function touchstartHandle(event: TouchEvent) {
            setTouchstartEvent(event);
        }

        function touchendHandle(event: TouchEvent) {
            setTouchendEvent(event);

            if (isSwipeUp()) {
                dispatch('setIsSidebarShow', true);
            } else if (isSwipeDown()) {
                dispatch('setIsSidebarShow', false);
            }

            setTouchendEvent(null);
        }

        watch(scrollTopValue, (newValue, oldValue) => {
            if (Math.abs(newValue - oldValue) > 5) {
                newValue > oldValue
                    ? dispatch('setIsNavShow', false)
                    : dispatch('setIsNavShow', true);
            }
        });

        onMounted(() => {
            const savedScrollTopValue = Number(
                sessionStorage.getItem('PROFILE_SCROLLTOP')
            );

            setScrollTarget(portfolioContainerRef.value);

            if (savedScrollTopValue) {
                portfolioContainerRef.value.scroll({
                    top: savedScrollTopValue,
                    behavior: 'smooth'
                });
            }
        });

        window.onbeforeunload = () => {
            sessionStorage.setItem(
                'PROFILE_SCROLLTOP',
                scrollTopValue.value.toString()
            );
        };

        return {
            portfolioContainerRef,
            scrollTopValue,
            touchstartHandle,
            touchendHandle
        };
    }
});
</script>

<style scoped lang="scss">
.portfolio_container {
    padding: 60px 20% 0 20%;
    margin: auto;
    perspective: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100dvh - 60px);
    position: relative;
    scroll-behavior: smooth;

    @media (orientation: portrait) {
        padding: 60px 5% 0 5%;
    }

    &::-webkit-scrollbar {
        width: 4px;

        @media (orientation: portrait) {
            display: none;
        }
    }

    &::-webkit-scrollbar-track {
        background: rgba($color-gray, 0.2);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
    }

    &::-webkit-scrollbar-thumb {
        background: $color-primary;
    }
}
</style>
