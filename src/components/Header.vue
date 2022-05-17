<template>
    <transition name="header" mode="out-in">
        <header v-if="isNavShow">
            <div class="close_icon" @click="toggleSidebar">
                <font-awesome-icon
                    :icon="['fas', isSidebarShow ? 'xmark' : 'bars']"
                />
            </div>
            <div class="options_container">
                <template v-for="tab in tabs">
                    <div
                        class="tab"
                        @click="tabClickHandle(tab.value)"
                        :key="tab.value"
                        v-if="!isMobile && isProfile"
                    >
                        {{ $t(tab.localeKey) }}
                    </div>
                </template>
                <font-awesome-icon
                    :icon="['fas', 'globe']"
                    class="locale"
                    @click="localeHandle"
                />
            </div>
        </header>
    </transition>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import headerTabs from '@/assets/json/headerTabs.json';
import { useScroll } from '@/composables/scroll';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { dispatch, state } = useStore();
        const isSidebarShow = computed(() => state.isSidebarShow);
        const isMobile = computed(() => state.isMobile);
        const isNavShow = computed(() => state.isNavShow);
        const scrollTopList = computed(() => state.scrollTopList);
        const route = useRoute();
        const isProfile = computed(() => route.name === 'profile');
        const { locale } = useI18n();
        const { setScrollTopValue, isScrollDown } = useScroll();
        const tabs = ref(headerTabs);

        function toggleSidebar() {
            dispatch('setIsSidebarShow', !isSidebarShow.value);
        }

        function tabClickHandle(text: string) {
            const target = scrollTopList.value.find(
                (scrollTopElement) => scrollTopElement.key === text
            );
            const scrollTopValue = target?.value ?? 0;

            setScrollTopValue(scrollTopValue);
        }

        function localeHandle() {
            const newLocale = locale.value === 'en-US' ? 'zh-TW' : 'en-US';

            locale.value = newLocale;
            localStorage.setItem('locale', newLocale);
        }

        watch(isScrollDown, () => {
            dispatch('setIsNavShow', !isScrollDown.value);
        });

        return {
            isSidebarShow,
            isNavShow,
            tabs,
            isMobile,
            isProfile,
            locale,
            toggleSidebar,
            tabClickHandle,
            localeHandle
        };
    }
});
</script>

<style lang="scss">
header {
    @include flex(center, space-between);
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 32px);
    height: 60px;
    background: $color-background;
    padding: 0 16px;
    z-index: 1;
    border-bottom: 1px solid $color-primary;

    .close_icon {
        @include flex(center, center);
        @include border_radius();
        transition: 0.3s all ease;
        width: 32px;
        height: 32px;
        box-sizing: border-box;
        color: $color-primary;
        border: 1px solid $color-primary;
        cursor: pointer;

        @media (hover: hover) {
            &:hover {
                color: $color-white;
                border: 1px solid $color-white;
            }
        }
    }

    .options_container {
        @include flex(center, center);
        height: 100%;

        .locale {
            @include border_radius();
            width: 32px;
            height: 32px;
            cursor: pointer;
            box-sizing: border-box;
            border: 1px solid $color-white;
            padding: 6px;

            @media (orientation: portrait) {
                margin-right: 0;
            }

            @media (hover: hover) {
                &:hover {
                    // background: $color-primary;
                    color: $color-primary;
                    border: 1px solid $color-primary;
                }
            }
        }

        .tab {
            @include flex(center, center);
            @include underline_animation();
            height: 50%;

            &:not(:last-child) {
                margin: 0 8px;
            }
        }
    }
}
</style>
